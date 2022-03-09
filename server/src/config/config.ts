import dotenv from "dotenv"
dotenv.config()

const config = {
    PORT        :   Number(process.env.PORT),
    SALT_LEN    :   Number(process.env.SALT_LEN),
    DB_CLIENT   :   String(process.env.DB_CLIENT),
    DB_HOST     :   String(process.env.DB_HOST),
    DB_PORT     :   Number( process.env.DB_PORT),
    DB_USER     :   String(process.env.DB_USER),
    DB_PASS     :   String(process.env.DB_PASS),
    DB_NAME     :   String(process.env.DB_NAME),
}

export default config