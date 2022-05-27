import {Router} from "express";
import fetch from "node-fetch";

const route = Router()

route.get('/', async (req, res) => {
    let result = await fetch('http://localhost:4000/api/news').then(r => r.json())
    let context = result[1]
    context.commentCount =context.Comments.length
    res.render('index/index.hbs', {layout: false, context: context})
})

export default route