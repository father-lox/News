import News from "./news.model";
import Users from "./user.model";

Users.belongsTo(News, { foreignKey: 'idUser' })
News.hasOne(Users, { foreignKey: 'idUser' })

export default {
    Users,
    News
}