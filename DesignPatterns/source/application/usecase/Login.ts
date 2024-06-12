import UserRepository from "../repository/UserRepository";

export default class Login {
    constructor(
        readonly userRepository: UserRepository
    ) { }
    async execute(input: Input): Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        if (!user) throw new Error("Authentication failed");
        if (user?.password !== input.password) throw new Error("Authentication failed");
        return {
            name: user.name.getValue(),
            token: "123456"
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
