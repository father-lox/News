import * as Sequelize from "sequelize";
import db, {dbConfig} from "../../../db/db";

export default class Roles extends Sequelize.Model {
    idRole?: number
    role?: string
}

Roles.init({
    idRole: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    role: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true
    }
}, dbConfig('Roles'))

export enum RoleEnum {
    WRITER = 1,
    READER,
}