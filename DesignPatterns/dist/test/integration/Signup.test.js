"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepositoryMemory_1 = __importDefault(require("../../source/infra/repository/memory/UserRepositoryMemory"));
const SignUp_1 = __importDefault(require("../../source/application/usecase/SignUp"));
const Login_1 = __importDefault(require("../../source/application/usecase/Login"));
test("Should signup", async function () {
    const userRepositoryMemory = new UserRepositoryMemory_1.default();
    const signup = new SignUp_1.default(userRepositoryMemory);
    const login = new Login_1.default(userRepositoryMemory);
    const input = {
        name: "churros augusto",
        email: "churros@gmail.com",
        password: "churros",
        age: 20
    };
    await signup.execute(input);
    const output = await login.execute({ email: input.email, password: input.password });
    expect(output.name).toBe("churros augusto");
    expect(output.token).toBe("123456");
});
test("Should not signup if name is invalid", async function () {
    const userRepositoryMemory = new UserRepositoryMemory_1.default();
    const signup = new SignUp_1.default(userRepositoryMemory);
    const input = {
        name: "churros",
        email: "churros@gmail.com",
        password: "churros123",
        age: 20
    };
    const signupAction = async () => await signup.execute(input);
    expect(signupAction).rejects.toThrow(new Error("Invalid username"));
});
