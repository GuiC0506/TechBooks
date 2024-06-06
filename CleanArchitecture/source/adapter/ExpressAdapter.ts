import { Request, Response } from "express";

export default class ExpressAdapter {
    static create(fn: Function) {
        return async function(req: Request, res: Response) {
            const obj = await fn(req.params, req.body);
            res.json(obj);
        }
    }
}
