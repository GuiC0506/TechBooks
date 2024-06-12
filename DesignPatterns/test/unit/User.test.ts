import User from "../../source/domain/entity/User"

// test pyramid: unit > integration > e2e
test("Should create a user", async function() {
    const user = User.create(
        "Churros Augusto",
        "churros@gmail.com",
        "churros123",
        19
    );
    expect(user.name.getValue()).toBe("Churros Augusto");
    expect(user.email.getValue()).toBe("churros@gmail.com");
    expect(user.password).toBe("churros123");
    expect(user.age).toBe(19);
})

test("Should not create a user with invalid name", async function() {
    expect(() => User.create(
        "Churros",
        "churros@gmail.com",
        "churros123",
        19
    )).toThrow(new Error("Invalid name"));
})

test("Should not create a user with invalid email", async function() {
    expect(() => User.create(
        "Churros Augusto",
        "churros@gmail",
        "churros123",
        19
    )).toThrow(new Error("Invalid email"));
})

test("Should not create a user with invalid password", async function() {
    expect(() => User.create(
        "Churros Augusto",
        "churros@gmail.com",
        "chur",
        19
    )).toThrow(new Error("Invalid password"));
})

test("Should not create a user with invalid age", async function() {
    expect(() => User.create(
        "Churros Augusto",
        "churros@gmail.com",
        "churros123",
        8
    )).toThrow(new Error("Invalid age"));
})
