import {NextFunction, Request, Response} from "express";
import newsService from "../service/news/news.service";

class NewsController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        res.json(await newsService.findAll())
    }


}

export default new NewsController()