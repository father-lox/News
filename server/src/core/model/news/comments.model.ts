import * as Sequelize from "sequelize";
import db, {dbConfig} from "../../../db/db";

export default class Comments extends Sequelize.Model {
    idComment?: number
    content?: string
    idNews?: number
    idUser?: number
    idEmail?: number
}

Comments.init({
    idComment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: Sequelize.STRING(512),
        allowNull: true
    },
    idNews: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idEmail: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, dbConfig('Comments'))