import {NextFunction, Request, Response} from "express";
import newsService from "../service/news/news.service";
import ApiError from "../../error/ApiError";
import jwt from "jsonwebtoken";
import {app_config} from "../../config/config";
import Users from "../model/users/user.model";

class NewsController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        res.json(await newsService.findAll())
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        let id = Number(req.query.id)
        res.json(await newsService.getById(isNaN(id) ? 0 : id))
    }

    async getRandom(req: Request, res: Response, next: NextFunction) {
        res.json(await newsService.findRandom())
    }

    async post(req: Request, res: Response, next: NextFunction) {
        let header = req.headers["authorization"]
        if (header != null) {
            let token = header.split(' ')[1]
        }
        else {
            next(ApiError.Unauthorized("No token provided"))
        }
    }
}

export default new NewsController()