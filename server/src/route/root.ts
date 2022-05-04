import {Router} from "express";
import models from "../core/model/models";
import newsRouter from "./news.router";
import auth from "./auth.router";

const router = Router()

router.use('/auth', auth)
router.use('/news', newsRouter)

export default router