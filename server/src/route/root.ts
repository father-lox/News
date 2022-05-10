import {Router} from "express";
import models from "../core/model/models";
import newsRouter from "./news.router";
import auth from "./auth.router";
import Emails from "../core/model/users/emails.model";
import Users from "../core/model/users/user.model";

const router = Router()

router.use('/auth', auth)
router.use('/news', newsRouter)

export default router