import {NextFunction, Request, Response} from "express";
import getUser from "../share/getUser";


export default function (req: Request, res: Response, next: NextFunction) {
    const token = req.cookies["authorization"];

    if (token == null) {
        return next()
    }

    try {
        res.locals["user"] = getUser(token as string)
        res.locals["is_auth"] = true
        return next()
    }
    catch (e) {
        res.locals["user"] = {
            id: 0,
            role: -1,
            login: 'unauthorized'
        }
        res.locals["is_auth"] = false
        return next()
    }

}