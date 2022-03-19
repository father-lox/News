import knex from "knex"
import config from "../config";

const db = knex({
    client: config.DB_CLIENT,
    connection: {
        host: config.DB_HOST,
        port: config.DB_PORT,
        user: config.DB_USER,
        password: config.DB_PASS,
        database: config.DB_NAME
    }
})

export default db