"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(input) {
        const user = await this.userRepository.getByEmail(input.email);
        if (!user)
            throw new Error("Authentication failed");
        if (user?.password !== input.password)
            throw new Error("Authentication failed");
        return {
            name: user.name,
            token: "123456"
        };
    }
}
exports.default = Login;
