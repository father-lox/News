import {Router} from "express";
import newsController from "../core/controller/news.controller";

const router = Router()

router.get('/', newsController.getAll)

export default router