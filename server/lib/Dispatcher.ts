import {CommandBase, QueryBase} from "./cqrs/MessageBase";

export default class Dispatcher {

    async Push(c: CommandBase): Promise<void> {
        await c.Execute()
    }

    async Query<TResult>(q: QueryBase<TResult>): Promise<TResult[]> {
        return q.Execute();
    }

}