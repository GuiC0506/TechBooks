import User from "../../source/domain/entity/User"

// test pyramid: unit > integration > e2e
test("Should create a user", async function() {
    const user = await User.create(
        "Churros Augusto",
        "churros@gmail.com",
        "churros123",
        19
    );
    expect(user.name.getValue()).toBe("Churros Augusto");
    expect(user.email.getValue()).toBe("churros@gmail.com");
    expect(user.password.value).toBe("ba69a051d5be72ae5ccdf29df37040a912edc500d6de636480d841f037c834f5ae3c99ed63324a068ea5ca854937f3a25161bf0d58693a83f5a92b4df98fd27b");
    expect(user.age).toBe(19);
})

test("Should not create a user with invalid name", async function() {
    expect(() => User.create(
        "Churros",
        "churros@gmail.com",
        "churros123",
        19
    )).rejects.toThrow(new Error("Invalid name"));
})

test("Should not create a user with invalid email", async function() {
    expect(() => User.create(
        "Churros Augusto",
        "churros@gmail",
        "churros123",
        19
    )).rejects.toThrow(new Error("Invalid email"));
})

test("Should not create a user with invalid password", async function() {
    expect(() => User.create(
        "Churros Augusto",
        "churros@gmail.com",
        "chur",
        19
    )).rejects.toThrow(new Error("Invalid password"));
})

test("Should not create a user with invalid age", async function() {
    expect(() => User.create(
        "Churros Augusto",
        "churros@gmail.com",
        "churros123",
        8
    )).rejects.toThrow(new Error("Invalid age"));
})
