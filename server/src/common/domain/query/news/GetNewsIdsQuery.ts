import {QueryBase} from "../../../../../lib/cqrs/MessageBase";
import {newsTableName, News} from "../../../model/news";

export default class GetNewsIdsQuery extends QueryBase<number> {
    async Execute(): Promise<number[]> {
        return this.q<number>(newsTableName).select('idNews')
    }
}