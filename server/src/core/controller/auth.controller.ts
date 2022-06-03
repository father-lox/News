import {NextFunction, Request, Response} from "express";
import bcrypt from "bcrypt";
import Users from "../model/users/user.model";
import {app_config} from "../../config/config";
import ApiError from "../../error/ApiError";
import jwt from "jsonwebtoken";
import {RoleEnum} from "../model/users/roles.model";
import userService from "../service/user/user.service";


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
        }
        else {
            let hash = <string>user?.password?.replace(new RegExp(' ', 'g'), '');
            if (await bcrypt.compare(password, hash)) {
                let token = jwt.sign({
                    id: user?.idUser,
                    login: user?.login,
                    role: user?.idRole
                }, app_config.key, {
                    expiresIn: app_config.jwt_expires_in
                })
                res.json({ token })
            }
            else {
                next(ApiError.BadRequest('password does not match'))
            }
        }
    }

    async register(req: Request, res: Response, next: NextFunction) {
        let {login, password, email} = req.body
        if (login == null || password == null || email == null) {
            return next(ApiError.BadRequest('invalid body params'))
        }

        try {
            await userService.create({login, password, email}, RoleEnum.READER);
            res.sendStatus(200)
        }
        catch (e) {
            return next(e)
        }
    }

    async register_writer(req: Request, res: Response, next: NextFunction) {
        let {login, password} = req.body
        let user = await Users.findOne({
            where: {
                login: login
            }
        })
        if (user != null) {
            next(ApiError.BadRequest('login is already exists'))
        }
        else {
            let hash = await bcrypt.hash(password, 10)

            await Users.create({
                login: login,
                password: hash,
                idRole: RoleEnum.WRITER
            }).catch(next)
            res.send('success')
        }
    }
}

export default new AuthController()