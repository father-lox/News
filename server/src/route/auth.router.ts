import {Router} from "express";
import authController from "../core/controller/auth.controller";
import auth from "../middlewares/userFromHeader";

const router = Router()

router.post('/login', authController.login)
router.post('/registration', authController.register)
router.post('/registration_writer', authController.register_writer)
router.post('/token', (req, res) => {
    res.json(res.locals["user"])
})

export default router