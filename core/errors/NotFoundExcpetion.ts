export class NotFoundExcpetion extends Error {

    constructor(message: string, data?: any) {
        super(message)
        this.data = data;
    }

    readonly statusCode = 404;
    data?: any
}