import {NextFunction, Request, Response} from "express";
import newsService from "../services/news.service";

class NewsController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        res.json(await newsService.findAll())
    }

    async create(req: Request, res: Response, next: NextFunction) {

    }
}

export default new NewsController()