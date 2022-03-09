import {Request, Response} from "express";

export default class ApiError extends Error {

    public at: Date

    constructor(public code: number, reason: string) {
        super(reason)
        this.at = new Date()
    }


    handle(req: Request, res: Response) {
        let st: string[] | undefined
        if (this.stack !== undefined) {
            st = this.stack.split('\n')
        }
        res.status(this.code).json({
            code: this.code,
            reason: this.message,
            at: this.at,
            stack: st
        })
    }

}