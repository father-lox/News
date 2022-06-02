import {NextFunction, Request, Response} from "express";
import Comments from "../model/news/comments.model";
import Emails from "../model/users/emails.model";

class CommentsController {

    async post(req: Request, res: Response, next: NextFunction) {
        let {idUser, idNews, email, content} = req.body

        try {
            let emailId = await Emails.findOrCreate({
                where: {
                    email
                },
                defaults: {
                    email
                }
            })

            await Comments.create({
                idUser,
                idNews,
                idEmail: emailId[0].idEmail,
                content
            })

            res.sendStatus(200)
        }
        catch (e) {
            next(e)
        }
    }
}

export default new CommentsController()