import {NextFunction, Request, Response} from "express";
import Dispatcher from "../../../../lib/Dispatcher";
import Repository from "../../../../lib/Repository";
import GetNewsQuery from "../../../common/domain/query/news/GetNewsQuery";
import GetNewsIdsQuery from "../../../common/domain/query/news/GetNewsIdsQuery";

const d = new Dispatcher()

export default class NewsController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        let queryRes = await d.Query(new GetNewsQuery())
        res.json(queryRes);
    }

    async getAllIds(req: Request, res: Response, next: NextFunction) {
        let queryRes = await d.Query(new GetNewsIdsQuery())
        res.json(queryRes)
    }
}