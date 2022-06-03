import Users from "../../model/users/user.model";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {RoleEnum} from "../../model/users/roles.model";
import ApiError from "../../../error/ApiError";
import {app_config} from "../../../config/config";
import models from "../../model/models";

class UserService {

    async create(u: { login: string, password: string, email: string }, role: RoleEnum) {
        let user = await Users.findOne({
            where: {
                login: u.login
            }
        })

        if (user != null) {
            throw ApiError.BadRequest('User is already exist')
        }

        let hash = await bcrypt.hash(u.password, 10)
        let email = await models.Emails.findOrCreate({
            where: {
                email: u.email
            }
        })

        console.log(email)
        console.log(email[0].email)

        if (email[0] != null && email[0].idUser != null) {
            throw ApiError.BadRequest('email is already taken')
        }

        let newUser = await models.Users.create({
            login: u.login,
            password: hash,
            idRole: role
        })

        await models.Emails.update({
            email: u.email,
            idUser: newUser.idUser
        }, {
            where: {
                idEmail: email[0].idEmail
            }
        })
    }
}

export default new UserService()