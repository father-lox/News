import {Router} from "express";
import fetch from "node-fetch";

const route = Router()

route.get('/', async (req, res) => {
    let result = await fetch('http://localhost:4000/api/news/random').then(r => r.json())
    let context = result
    context.commentCount = context.Comments.length
    res.render('index/index.hbs', {layout: false, context: context})
})


route.get('/create-news', async (req, res) => {
    res.render('write/writeNews.hbs', {layout: false})
})

route.get('/singin', async (req, res) => {
    res.render('singIn/singIn.hbs', {layout: false})
})

route.get('/singup', async (req, res) => {
    res.render('singUp/singUp.hbs', {layout: false})
})

export default route