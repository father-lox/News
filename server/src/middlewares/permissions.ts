import {RoleEnum} from "../core/model/users/roles.model";
import {NextFunction, Request, Response} from "express";
import ApiError from "../error/ApiError";

export function hasPermission(role: RoleEnum) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (res.locals['is_auth'] === true) {
            if (res.locals['user'].role == role) {
                return next()
            }
            return next(ApiError.Forbidden('forbidden'))
        }
        return next(ApiError.Unauthorized('no token or token is expired'))
    }
}

export function isAuthenticated() {
    return (req: Request, res: Response, next: NextFunction) => {
        if (res.locals['is_auth'] === true) {
            return next()
        }
        return next(ApiError.Unauthorized('no token or token is expired'))
    }
}