import db from "../src/config/db/db"


export default class Repository {

    query<TRecord, TResult>(table: string) {
        return db<TRecord, TResult>(table)
    }

}