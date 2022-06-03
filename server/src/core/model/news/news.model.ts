import * as Sequelize from "sequelize";
import db, {dbConfig} from "../../../db/db";
import Users from "../users/user.model";
import Views from "./views.model";
import Comments from "./comments.model";

export default class News extends Sequelize.Model {
    idNews?: number
    heading?: string
    authorComment?: string
    date?: Date
    idUser?: number
    User?: Users
    View?: Views
    Comments?: Comments[]
}

Sequelize.DATE.prototype._stringify = function _stringify(date: any, options: any) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

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
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    idUser: {
        type: Sequelize.INTEGER,
    }
}, dbConfig('News'))

