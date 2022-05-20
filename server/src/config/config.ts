import 'dotenv/config'

const db_config = {
        name: String(process.env.DB_NAME),
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASS),
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
    },
    app_config = {
        port: String(process.env.APP_PORT)
    }
export {
    db_config,
    app_config
}