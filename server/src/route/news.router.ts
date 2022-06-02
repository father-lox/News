import {Router} from "express";
import newsController from "../core/controller/news.controller";

const router = Router()

router.get('/', newsController.getAll)
router.get('/random', newsController.getRandom)
router.post('/create', newsController.post)
router.get('/byid', newsController.getById)

export default router