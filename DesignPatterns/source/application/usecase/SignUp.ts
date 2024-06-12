import User from "../../domain/entity/User";
import UserRepository from "../repository/UserRepository";

export default class SignUp {
    constructor(
        readonly userRepository: UserRepository
    ) { }

    async execute(input: Input): Promise<void> {
        const user = User.create(input.name, input.email, input.password, input.age);
        this.userRepository.save(user);
    }
}

type Input = {
    name: string,
    email: string,
    password: string,
    age: number
}

