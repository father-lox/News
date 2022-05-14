import Users from "../../model/users/user.model";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

class UserService {

    async create(user: {login: string, password: string, email: string}) {
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash

    }


}

export default new UserService()