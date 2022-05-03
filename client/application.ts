import express, {Router} from "express"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors"
import { engine } from "express-handlebars"
import * as path from "path";
import hbs from "hbs"
import nodeSassMiddleware from "node-sass-middleware";

export default (root: Router) => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cookieParser())

    hbs.registerPartials(path.join(__dirname, 'components'))
    app.set('view engine', 'handlebars')
    app.use(nodeSassMiddleware({
        src: path.join(__dirname, 'pages', 'index'),
        dest: path.join(__dirname, 'public'),
        outputStyle: "compressed"
    }))
    app.engine('handlebars', engine())
    app.set('views', path.join(__dirname, 'pages'))

    app.use('/', root)
    app.use(express.static(path.join(__dirname)))

    // Error handler
    // app.use()

    return app
}
