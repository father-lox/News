import {Router} from "express";
import models from "../core/model/models";

const router = Router()

router.get('/test', async (req, res) => {
    let qres = await models.News.findAll({include: [{model: models.Users}]})
    res.json(qres[0].User)
})

export default router