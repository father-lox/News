import * as Sequelize from "sequelize";
import db, {dbConfig} from "../../../db/db";

export default class NewsRubrics extends Sequelize.Model {
    idNews?: number
    idRubric?: number
}

NewsRubrics.init({
    idNews: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idRubric: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
},dbConfig('NewsRubrics'))