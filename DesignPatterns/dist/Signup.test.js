"use strict";
test("Should signup", async function () {
    const userRepository = new UserRepository();
    // given
    const signup = new Signup();
    const input = {
        name: "churros",
        email: "churros@gmail.com",
        password: "churros",
        age: 8
    };
    // when
    await signup.execute(input);
    //then
    const login = new Login();
    const output = login.execute(input.email, input.password);
    expect(output.name).toBe("churros");
    expect(output.token).toBe("123456");
});
