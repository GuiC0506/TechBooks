import { Request } from "@hapi/hapi";

export default class HappiAdapter {
    static create(fn: Function) {
        return async function(req: Request) {
            const obj = await fn(req.params, req.payload)
            return obj;
        }
    }
}
