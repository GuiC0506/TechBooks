import TokenGenerator from "../../domain/service/TokenGenerator";
import UserRepository from "../repository/UserRepository";

export default class Login {
    constructor(
        readonly userRepository: UserRepository
    ) { }
    async execute(input: Input): Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        if (!user) throw new Error("Authentication failed");
        if (!(await user.validatePassword(input.password))) throw new Error("Authentication failed");
        const tokenGenerator = new TokenGenerator("secret");
        const token = tokenGenerator.generate(user, 100000, new Date("2023-03-01T10:00:00"));
        return {
            name: user.name.getValue(),
            token: token
        }
    }
}

type Input = {
    email: string,
    password: string
}

type Output = {
    name: string,
    token: string
}
