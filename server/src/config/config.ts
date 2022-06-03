import 'dotenv/config'

const db_config = {
        name: String(process.env.DB_NAME),
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASS),
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
    },
    app_config = {
        port: String(process.env.APP_PORT),
        key: String(process.env.APP_KEY),
        jwt_expires_in: String(process.env.APP_JWT_EXPIRES)
    },
    email_config = {
        login: String(process.env.EMAIL_USER),
        password: String(process.env.EMAIL_PASS)
    }
export {
    db_config,
    app_config,
    email_config
}