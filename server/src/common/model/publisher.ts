const publisherPageTable = "PublisherPage"
interface PublisherPage {
    page: string
    date: Date | Date[]
    idPage: number
    idNews: number
    idPublisher: number
}

export {
    PublisherPage,
    publisherPageTable
}