import {Router} from "express";
import newsController from "../core/controller/news.controller";

const router = Router()

router.get('/', newsController.getAll)
router.get('/random', newsController.getRandom)

export default router