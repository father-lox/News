import * as Sequelize from "sequelize"
import db, {dbConfig} from "../../../db/db";

export default class PublisherPage extends Sequelize.Model {
    idPage?: number
    page?: string
    idPublisher?: number
    idNews?: number
    date?: Date
}

PublisherPage.init({
    idPage: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    page: {
        type: Sequelize.STRING(256),
        allowNull: false
    },
    idPublisher: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idNews: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, dbConfig('PublisherPage'))