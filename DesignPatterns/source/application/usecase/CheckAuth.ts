import TokenGenerator from "../../domain/service/TokenGenerator";

export default class CheckAuth {
    async execute(token: any): Promise<Output> {
        const tokenGenerator = new TokenGenerator("secret");
        const payload = await tokenGenerator.verify(token)
        return {
            email: payload.email
        }
    }
}

type Output = {
    email: string
}
