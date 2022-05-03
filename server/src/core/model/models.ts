import News from "./news.model";
import Users from "./user.model";

Users.hasMany(News, {foreignKey: 'idUser'})
News.belongsTo(Users, { foreignKey: 'idUser' })

export default {
    Users,
    News
}