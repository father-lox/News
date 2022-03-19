import {Router} from "express";
import NewsController from "../../controller/news/news.controller";

const route = Router()
const controller = new NewsController()

route
    .get('/', controller.getAll)
    .get('/id', controller.getAllIds)

export default route