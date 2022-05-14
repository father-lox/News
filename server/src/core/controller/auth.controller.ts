import {NextFunction, Request, Response} from "express";

class AuthController {

    async login(req: Request, res: Response, next: NextFunction) {

    }

    async register(req: Request, res: Response, next: NextFunction) {
        let password = req.body.password
        let login = req.body.login
        let email = req.body.email


    }

}

export default new AuthController()