import * as Sequelize from "sequelize"
import db, {dbConfig} from "../../../db/db";

export default class Publishers extends Sequelize.Model {
    idPublisher?: number
    name?: string
    domen?: string
    icon?: string
}

Publishers.init({
    idPublisher: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(32),
        allowNull: false
    },
    domen: {
        type: Sequelize.STRING(32),
        allowNull: false
    },
    icon: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, dbConfig('Publishers'))

