import m from "../../model/models";

class NewsService {

    async findAll() {
        return await m.News.findAll({include: [{model: m.Users}]})
    }

}

export default new NewsService()