import {NextFunction, Request, Response} from "express";
import bcrypt from "bcrypt";
import Users from "../model/users/user.model";
import {app_config} from "../../config/config";
import ApiError from "../../error/ApiError";
import jwt from "jsonwebtoken";


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

    async register(req: Request, res: Response, next: NextFunction) {
        let {login, password} = req.body
        let user = await Users.findOne({
            where: {
                login: login
            }
        })
        if (user != null) {
            ApiError.BadRequest('login is already exists')
        }
        let hash = await bcrypt.hash(password, 10)

        await Users.create({
            login: login,
            password: hash,
            idRole: 2
        }).catch(next)
    }
}

export default new AuthController()