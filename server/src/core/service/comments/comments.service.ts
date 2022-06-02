import m from "../../model/models";
import Emails from "../../model/users/emails.model";
import Comments from "../../model/news/comments.model";

class CommentsService {

    async create(idNews: number, content: string, email: string | null = null, idUser: number | null) {

        let emailId = null
        if (email != null) {
            let emailObject = await Emails.findOrCreate({
                where: {
                    email
                },
                defaults: {
                    email
                }
            })
            emailId = emailObject[0].idEmail
        }

        await Comments.create({
            idUser,
            idNews,
            idEmail: emailId,
            content
        })
    }

}

export default new CommentsService()