import * as Sequelize from "sequelize";
import db, {dbConfig} from "../../../db/db";
import Users from "../users/user.model";

export default class News extends Sequelize.Model {
    idNews?: number
    heading?: string
    authorComment?: string
    date?: Date
    idUser?: number
}

News.init({
    idNews: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    heading: {
        type: Sequelize.STRING(254),
        allowNull: false,
    },
    authorComment: {
        type: Sequelize.STRING(512),
        allowNull: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    idUser: {
        type: Sequelize.INTEGER,
    }
}, dbConfig('News'))

