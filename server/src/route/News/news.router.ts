import {Router} from "express";
import newsController from "../../core/controller/news.controller";

const router = Router()

router.get('/test', newsController.getAll)

export default router