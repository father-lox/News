import {Router} from "express";
import models from "../core/model/models";
import newsRouter from "./News/news.router";

const router = Router()

router.use('/news', newsRouter)

export default router