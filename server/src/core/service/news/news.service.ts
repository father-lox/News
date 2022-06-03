import m from "../../model/models";
import models from "../../model/models";

class NewsService {

    async findAll() {
        return await m.News.findAll({
            include: [
                {model: m.Users},
                {model: m.Views},
                {model: m.Comments},
                {model: m.Rubrics},
                {model: m.PublisherPage, include: [{model: m.Publishers}]}
            ]
        })
    }

    async findRandom() {
        let qres = await m.News.findAll({
            include: [
                {model: m.Users},
                {model: m.Views},
                {model: m.Comments},
                {model: m.Rubrics},
                {model: m.PublisherPage, include: [{model: m.Publishers}]}
            ]
        })
        let random = Math.floor(Math.random() * qres.length)
        return qres[random]
    }

    async create(heading: string, comment: string, idUser: number) {
        let news = await models.News.create({
            heading,
            authorComment: comment,
            idUser,
            date: new Date().toISOString()
        })
        await models.Views.create({
            idNews: news.idNews,
            count: 0
        })
    }

    async getById(id: number) {
        let qres = await m.News.findOne({
            where: {
                idNews: id
            },
            include: [
                {model: m.Users},
                {model: m.Views},
                {model: m.Comments},
                {model: m.Rubrics},
                {model: m.PublisherPage, include: [{model: m.Publishers}]}
            ]
        })

        if (qres == null) {
            return {}
        }
        return qres
    }
}

export default new NewsService()