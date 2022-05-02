import m from "../model/models"
import {where} from "sequelize";

class NewsService {
    async findAll() {
        return await m.News.findAll({include: [{model: m.Users}]})
    }

    async findById(id: number) {
        return await m.News.findOne({
            include: [{model: m.Users}],
            where: {
                idNews: id
            }
        })
    }

    async delete(id: number) {
        return await m.News.destroy({
            where: {
                idNews: id
            }
        })
    }

    async create(heading: string, user: number, date: Date = new Date(), comment: string | undefined = undefined) {
        await m.Users.create({
            date: date,
            heading: heading,
            authorComment: comment,
            idUser: user
        })
    }
}

export default new NewsService()