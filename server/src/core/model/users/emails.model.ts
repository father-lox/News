import * as Sequelize from "sequelize";
import db, {dbConfig} from "../../../db/db";

export default class Emails extends Sequelize.Model {
    idEmail?: number
    email?: string
    idUser?: number
}

Emails.init({
    idEmail: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: true
    }

}, dbConfig('Emails'))