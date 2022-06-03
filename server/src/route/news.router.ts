import {Router} from "express";
import newsController from "../core/controller/news.controller";
import hasPermission from "../middlewares/permissions";
import {RoleEnum} from "../core/model/users/roles.model";

const router = Router()

router.get('/', newsController.getAll)
router.get('/random', newsController.getRandom)
router.post('/create', hasPermission(RoleEnum.WRITER), newsController.post)
router.get('/byid', newsController.getById)

export default router