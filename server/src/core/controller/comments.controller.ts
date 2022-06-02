import {NextFunction, Request, Response} from "express";
import Comments from "../model/news/comments.model";
import Emails from "../model/users/emails.model";
import commentsService from "../service/comments/comments.service";

class CommentsController {

    async post(req: Request, res: Response, next: NextFunction) {
        let {idNews, email, content} = req.body

        try {
            let id = res.locals['user']?.id
            await commentsService.create(idNews, content, email, id == null ? null : id)
            res.sendStatus(200)
        }
        catch (e) {
            return next(e)
        }
    }
}

export default new CommentsController()