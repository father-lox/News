import {NextFunction, Request, Response} from "express";
import bcrypt from "bcrypt";
import Users from "../model/users/user.model";
import {app_config} from "../../config/config";
import ApiError from "../../error/ApiError";
import jwt from "jsonwebtoken";
import {RoleEnum} from "../model/users/roles.model";
import userService from "../service/user/user.service";
import {sendVerifyWriter} from "../../share/sendEmail";


class AuthController {

    async login(req: Request, res: Response, next: NextFunction) {
        let {login, password} = req.body
        let user = await Users.findOne({
            where: {
                login: login
            }
        })
        if (user == null) {
            next(ApiError.BadRequest('user not found'))
        } else {
            let hash = <string>user?.password?.replace(new RegExp(' ', 'g'), '');
            if (await bcrypt.compare(password, hash)) {
                let token = jwt.sign({
                    id: user?.idUser,
                    login: user?.login,
                    role: user?.idRole
                }, app_config.key, {
                    expiresIn: app_config.jwt_expires_in
                })

                res.clearCookie('authorization')
                res.cookie('authorization', token, {
                    maxAge: 2 * 60 * 60 * 1000,
                    httpOnly: false
                })

                res.json({token})
            } else {
                next(ApiError.BadRequest('password does not match'))
            }
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        res.clearCookie('authorization')
        res.sendStatus(200)
    }


    async register(req: Request, res: Response, next: NextFunction) {
        let {login, password, email} = req.body
        if (login == null || password == null || email == null) {
            return next(ApiError.BadRequest('invalid body params'))
        }

        try {
            await userService.create({login, password, email}, RoleEnum.READER);
            res.sendStatus(200)
        } catch (e) {
            return next(e)
        }
    }

    async create_writer_request(req: Request, res: Response, next: NextFunction) {
        let {name, description, email, redirect_url} = req.body
        if (name == null || description == null || email == null || redirect_url == null) {
            return next(ApiError.BadRequest('invalid body params'))
        }

        try {
            sendVerifyWriter(email, name, redirect_url)
        }
        catch (e) {
            return next(e)
        }

        let token = jwt.sign({value: email}, app_config.key, {expiresIn: '30d'})
        res.cookie('register_writer', token, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: false
        })
        res.sendStatus(200)
    }

    async register_writer(req: Request, res: Response, next: NextFunction) {
        let {login, password} = req.body
        if (login == null || password == null) {
            return next(ApiError.BadRequest('invalid body params'))
        }

        let token = req.cookies['register_writer']

        if (token == null) {
            return next(ApiError.Forbidden('token has expired'))
        }

        try {
            let e = <any>jwt.verify(token, app_config.key)
            await userService.create({login, password, email: e.value}, RoleEnum.WRITER);
            res.clearCookie('register_writer')
            res.sendStatus(200)
        } catch (e) {
            return next(e)
        }
    }
}

export default new AuthController()