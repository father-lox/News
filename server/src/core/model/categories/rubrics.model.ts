import * as Sequelize from "sequelize"
import db, {dbConfig} from "../../../db/db";

export default class Rubrics extends Sequelize.Model {
    idRubric?: number
    rubric?: string
}

Rubrics.init({
    idRubric: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    rubric: {
        type: Sequelize.STRING(16),
        allowNull: false,
        unique: true
    }
}, dbConfig('Rubrics'))