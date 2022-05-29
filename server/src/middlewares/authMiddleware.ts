import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import ApiError from "../error/ApiError";
import {app_config} from "../config/config";

export default function (req: Request, res: Response, next: NextFunction) {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        next(ApiError.Unauthorized('no token provided'))
    }

    try {
        let decoded = jwt.verify(token, app_config.key)
    }
    catch {
        next(ApiError.Unauthorized('invalid token'))
    }

    return next()
}