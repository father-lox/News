import {Router} from "express";
import authController from "../core/controller/auth.controller";

const router = Router()

router.post('/login', authController.login)
router.post('/registration', authController.register)

export default router