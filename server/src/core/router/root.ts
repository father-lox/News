import {Router} from "express";
import news from "./news/news.router"

const route = Router()

route
    .use('/news', news)

export default route