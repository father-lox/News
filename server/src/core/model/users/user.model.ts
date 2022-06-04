import * as Sequelize from "sequelize";
import db, {dbConfig} from "../../../db/db";

export default class Users extends Sequelize.Model {
    public idUser?: number
    public idRole?: number
    public login?: string
    public password?: string
}

Users.init({
    idUser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idRole: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(256),
        allowNull: false
    }
}, dbConfig('Users'))

