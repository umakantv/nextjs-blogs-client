

export default class AppError extends Error {
    status: number | undefined;
    code: string | undefined;
    description: string | undefined;
    meta: any;

    constructor(error = 'Something went wrong', status: number, description: string, code: string, meta: any) {
        super(error);
        this.status = status;
        this.description = description || this.message;
        this.code = code;
        this.meta = meta;
    }
}