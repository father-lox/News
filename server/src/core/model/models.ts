import News from "./news/news.model";
import Users from "./users/user.model";
import Comments from "./news/comments.model";
import Roles from "./users/roles.model";
import Emails from "./users/emails.model";
import Views from "./news/views.model";
import Rubrics from "./categories/rubrics.model";
import NewsRubrics from "./categories/news.rubrics.model";
import Publishers from "./publishers/publishers.model";
import PublisherPage from "./publishers/publisher.page.model";

Users.hasMany(News, {foreignKey: 'idUser'})
News.belongsTo(Users, { foreignKey: 'idUser'})

News.hasMany(Comments, {foreignKey: 'idNews', onDelete: 'CASCADE'})
Comments.belongsTo(News, {foreignKey: 'idNews'})

Roles.hasMany(Users, {foreignKey: 'idRole'})
Users.belongsTo(Roles, {foreignKey: 'idRole'})

Emails.belongsTo(Users, {foreignKey: 'idUser'})
Users.hasMany(Emails, {foreignKey: 'idUser', onDelete: 'CASCADE'})

News.hasOne(Views, {foreignKey: 'idNews', onDelete: 'CASCADE'})
Views.belongsTo(News, {foreignKey: 'idNews', })

News.belongsToMany(Rubrics, {
    through: NewsRubrics,
    foreignKey: 'idNews',
    onDelete: 'CASCADE'
})

Rubrics.belongsToMany(News, {
    through: NewsRubrics,
    foreignKey: 'idRubric',
    onDelete: 'CASCADE'
})

Publishers.hasMany(PublisherPage, {foreignKey: 'idPublisher'})
PublisherPage.belongsTo(Publishers, {foreignKey: 'idPublisher'})

News.hasMany(PublisherPage, {foreignKey: 'idNews'})
PublisherPage.belongsTo(News, {foreignKey: 'idNews'})

export default {
    Users,
    News,
    Comments,
    Roles,
    Emails,
    Views,
    Rubrics,
    Publishers,
    PublisherPage
}