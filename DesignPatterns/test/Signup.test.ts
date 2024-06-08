import SignUp from "../source/application/usecase/SignUp";
import UserRepositoryMemory from "../source/infra/repository/memory/UserRepositoryMemory";

test("Should signup", async function() {
    const userRepositoryMemory = new UserRepositoryMemory();
    const signup = new SignUp(userRepositoryMemory);
    const login = new Login(userRepositoryMemory);
    const input = {
        name: "churros",
        email: "churros@gmail.com",
        password: "churros",
        age: 8
    }
    await signup.execute(input);
    const output = login.execute(input.email, input.password);
    expect(output.name).toBe("churros");
    expect(output.token).toBe("123456")
})
