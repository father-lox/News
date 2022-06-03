class ApiError extends Error {

    code: number
    reason: string

    constructor(code: number, reason: string) {
        super(reason);
        this.code = code
        this.reason = reason
    }

    public static BadRequest(reason: string) : ApiError {
        return new ApiError(400, reason)
    }

    public static NotFound(reason: string) : ApiError {
        return new ApiError(404, reason)
    }

    public static Internal(reason: string) : ApiError {
        return new ApiError(500, reason)
    }

    public static Unauthorized(reason: string) : ApiError {
        return new ApiError(401, reason)
    }

    static Forbidden(reason: string) {
        return new ApiError(403, reason)
    }
}

export default ApiError;