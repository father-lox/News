import {NextFunction, Request, Response} from "express";
import ApiError from "../common/error/ApiError";
import ApiErrors from "../common/error/ApiErrors";

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        err.handle(req, res)
    }
    else {
        ApiErrors.UnknownError(err).handle(req, res)
    }
}