import News from "./news/news.model";
import Users from "./users/user.model";
import Comments from "./news/comments.model";
import Roles from "./users/roles.model";

Users.hasMany(News, {foreignKey: 'idUser'})
News.belongsTo(Users, { foreignKey: 'idUser' })

News.hasMany(Comments, {foreignKey: 'idNews'})
Comments.belongsTo(News, {foreignKey: 'idNews'})

Roles.hasMany(Users, {foreignKey: 'idRole'})
Users.belongsTo(Roles, {foreignKey: 'idRole'})

export default {
    Users,
    News,
    Comments,
    Roles
}