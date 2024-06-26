import UserRepositoryMemory from "../../source/infra/repository/memory/UserRepositoryMemory";
import SignUp from "../../source/application/usecase/SignUp";
import Login from "../../source/application/usecase/Login";

test("Should signup", async function() {
    const userRepositoryMemory = new UserRepositoryMemory();
    const signup = new SignUp(userRepositoryMemory);
    const login = new Login(userRepositoryMemory);
    const input = {
        name: "churros augusto",
        email: "churros@gmail.com",
        password: "churros",
        age: 20
    }
    await signup.execute(input);
    const output = await login.execute({ email: input.email, password: input.password });
    expect(output.name).toBe("churros augusto");
    expect(output.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNodXJyb3NAZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMH0.wHKb2qHoCiDqgbSO6qxoOfRg8lC9IEZ-wpUKFTyfM7Y")
})

test("Should not signup if name is invalid", async function() {
    const userRepositoryMemory = new UserRepositoryMemory();
    const signup = new SignUp(userRepositoryMemory);
    const input = {
        name: "churros",
        email: "churros@gmail.com",
        password: "churros123",
        age: 20
    }
    const signupAction = async () => await signup.execute(input);
    expect(signupAction).rejects.toThrow(new Error("Invalid name"));
})
