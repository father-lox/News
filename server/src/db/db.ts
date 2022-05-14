import { Sequelize } from "sequelize"

const db = new Sequelize({
    dialect: 'mssql',
    database: 'News',
    username: 'semen',
    password: '123',
    host: '192.168.1.34',
    port: 1444
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