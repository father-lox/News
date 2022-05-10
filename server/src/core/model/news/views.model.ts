import * as Sequelize from "sequelize"
import db, {dbConfig} from "../../../db/db";

export default class Views extends Sequelize.Model {
    idNews?: number
    count?: number
}

Views.init({
    idNews: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
    },
    count: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, dbConfig('Views'))