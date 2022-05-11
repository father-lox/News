import express, {Router} from "express"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { engine } from "express-handlebars"
import * as path from "path";
import hbs from "hbs"

export default (root: Router) => {
    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(cookieParser())

    hbs.registerPartials(path.join(__dirname, '..','components'))
    app.set('view engine', 'handlebars')
    app.engine('handlebars', engine())
    app.set('views', path.join(__dirname, '..', 'pages'))

    app.use(express.static(path.join(__dirname, '..', 'pub')))

    app.use('/', root)

    // Error handler
    // app.use()

    return app
}
