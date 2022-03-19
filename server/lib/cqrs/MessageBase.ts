import Repository from "../Repository";
import Dispatcher from "../Dispatcher";

export abstract class MessageBase<TResult> {

    public repository: Repository
    public dispatcher: Dispatcher

    constructor() {
        this.repository = new Repository()
        this.dispatcher = new Dispatcher()
    }

    public q<TQ>(table: string) {
        return this.repository.query<TQ, TQ[]>(table)
    }

    abstract Execute() : Promise<TResult[]>
}

export abstract class QueryBase<TResult> extends MessageBase<TResult> {
    abstract Execute(): Promise<TResult[]>
}

export abstract class CommandBase extends MessageBase<void> {
    abstract Execute(): Promise<void[]>
}