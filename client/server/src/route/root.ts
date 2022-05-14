import {Router} from "express";

const route = Router()

route.get('/', (req,res)=>{
    res.render('index/index.hbs', {layout: false})
})

export default route