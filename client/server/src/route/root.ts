import {Router} from "express";
import fetch from "node-fetch";

const route = Router()

route.get('/', async (req, res) => {
    let result = await fetch('http://localhost:2000/api/news/byid?id=4').then(r => r.json())
    let context = result
    console.log(result);
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

route.get('/your-news', async (req, res) => {
    res.render('yourNews/yourNews.hbs', {layout: false})
})

route.get('/make-post', async (req, res) => {
    res.render('makePost/makePost.hbs', {layout: false})
})

export default route