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
        let {heading, comment} = req.body
        if (heading == null || comment == null) {
            return next(ApiError.BadRequest('invalid body'))
        }

        try {
            await newsService.create(heading, comment, res.locals['user'].id)
            res.sendStatus(200)
        }
        catch (e) {
            return next(e)
        }
    }
}

export default new NewsController()