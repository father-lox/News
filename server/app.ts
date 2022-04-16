import cors from "cors"
import express, {Router} from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

export default (root: Router, apiUrl: string) => {
    const app = express()

    app.use(cors())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cookieParser())

    app.use(`/${apiUrl}`, root)

    // Error handler
    //app.use()
    return app
}