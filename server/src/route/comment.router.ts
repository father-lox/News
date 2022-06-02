import {Router} from "express";
import newsController from "../core/controller/news.controller";
import commentsController from "../core/controller/comments.controller";

const router = Router()

router.post('/', commentsController.post)

export default router