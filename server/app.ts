import express, {Router} from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors"
import errorHandler from "./src/middlewares/errorHandler";

const application = (root: Router) => {
    const app = express()
    app.use(cors())
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.use('/api', root)

    app.use(errorHandler)

    return app
}

export default application