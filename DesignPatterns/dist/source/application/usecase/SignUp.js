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
        const user = new User_1.default(input.name, input.email, input.password, input.age);
        this.userRepository.save(user);
    }
}
exports.default = SignUp;
