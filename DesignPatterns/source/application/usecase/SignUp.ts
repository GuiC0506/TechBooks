import UserRepository from "../repository/UserRepository";

export default class SignUp {
    constructor(
        readonly userRepository: UserRepository
    ) { }

    async execute(input: Input): Promise<void> {
        this.userRepository.save(input);
    }
}

type Input = {
    name: string,
    email: string,
    password: string,
    age: number
}

