import ApiError from "./ApiError";

export default class ApiErrors {

    static UnknownError(e: Error): ApiError {
        let err = new ApiError(500, e.message)
        err.stack = e.stack
        err.name = e.name
        return err
    }

    static Unauthorized(m: string): ApiError {
        return new ApiError(401, m)
    }

    static Internal(m: string): ApiError {
        return new ApiError(500, m)
    }

}