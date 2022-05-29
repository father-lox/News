import cors from "cors"
import express, {NextFunction, Request, Response, Router} from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import ApiError from "./src/error/ApiError";

function errorhandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log('ERROR')
    console.log(err.stack)
    if (err instanceof ApiError) {

        console.log('API ERROR')
        console.log(err.reason)

        res.status(err.code).json({
            code: err.code,
            reason: err.reason
        })
    }
    else {
        res.status(500).json({
            code: 500,
            message: err.message,
            name: err.name
        })
    }
}

export default (root: Router, apiUrl: string) => {
    const app = express()

    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(cookieParser())

    app.use(`/${apiUrl}`, root)

    // Error handler
    app.use(errorhandler)
    return app
}