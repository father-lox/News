import {Router} from "express";

const router = Router()

router.get('/test', (req, res) => {
    res.send('Hello, world!')
})

export default router