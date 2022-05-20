import { Sequelize } from "sequelize"
import {db_config} from "../config/config";

const db = new Sequelize({
    dialect: 'mssql',
    database: db_config.name,
    username: db_config.user,
    password: db_config.password,
    host: db_config.host,
    port: db_config.port
})

db
.sync({logging: false})
.then(() => console.log('Database synchronized...'))
.catch(console.log)

export function dbConfig(tableName: string) {
    return {
        sequelize: db,
        timestamps: false,
        tableName
    }
}

export default db