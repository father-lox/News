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

}

export default new NewsService()