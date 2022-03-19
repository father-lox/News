import {QueryBase} from "../../../../../lib/cqrs/MessageBase";
import {newsTableName, News} from "../../../model/news";
import {publisherPageTable, PublisherPage} from "../../../model/publisher";

export default class GetNewsQuery extends QueryBase<News> {
    async Execute(): Promise<News[]> {
        let qres = this.q<News & PublisherPage>(newsTableName)
            .select()
            .innerJoin(publisherPageTable,
                `${newsTableName}.idNews`,
                `${publisherPageTable}.idNews`)
            .then((o) => {
                let news =  o.map(i => {
                    let singleNews: News = {
                        idNews: i.idNews,
                        publisher: {
                            idPublisher: i.idPublisher,
                            date: (<Date[]>(<unknown>i.date))[1],
                            page: i.page
                        },
                        date: (<Date[]>(<unknown>i.date))[0],
                        authorComment: i.authorComment,
                        heading: i.heading
                    }
                    return singleNews
                })
                return news
            })

        return qres
    }
}