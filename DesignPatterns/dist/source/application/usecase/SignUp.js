"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../domain/entity/User"));
class SignUp {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(input) {
        if (input.name.split(" ").length < 2)
            throw new Error("Invalid username");
        if (!input.email.toLowerCase().match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i))
            throw new Error("Invalid email");
        const user = new User_1.default(input.name, input.email, input.password, input.age);
        this.userRepository.save(user);
    }
}
exports.default = SignUp;
