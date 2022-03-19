import {PublisherPage, publisherPageTable} from "./publisher"

const newsTableName = 'News'
interface News {

    idNews: number
    heading: string
    authorComment: string
    date: Date | Date[]

    publisher?: Omit<PublisherPage, 'idNews' | 'idPage'>
}

export {
    News,
    newsTableName
}