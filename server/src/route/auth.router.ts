import {Router} from "express";
import authController from "../core/controller/auth.controller";
import auth from "../middlewares/authMiddleware";

const router = Router()

router.post('/login', authController.login)
router.post('/registration', authController.register)
router.post('/token', auth, (req, res) => {res.send('hello')})

export default router