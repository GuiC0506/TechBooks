import User from "../../domain/entity/User";
import UserRepository from "../repository/UserRepository";

export default class SignUp {
    constructor(
        readonly userRepository: UserRepository
    ) { }

    async execute(input: Input): Promise<void> {
        if (input.name.split(" ").length < 2) throw new Error("Invalid username");
        if (!String(input.email).toLowerCase().match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )) throw new Error("Invalid email");
        const user = new User(input.name, input.email, input.password, input.age);
        this.userRepository.save(user);
    }
}

type Input = {
    name: string,
    email: string,
    password: string,
    age: number
}

