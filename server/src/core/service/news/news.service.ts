import m from "../../model/models";

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

}

export default new NewsService()