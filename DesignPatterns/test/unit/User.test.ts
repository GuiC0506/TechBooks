import User from "../../source/domain/entity/User"

// test pyramid: unit > integration > e2e
test("Should create a user", async function() {
    const user = new User(
        "Churros Augusto",
        "churros@gmail.com",
        "churros123",
        19
    );
    expect(user.name).toBe("Churros Augusto");
    expect(user.email).toBe("churros@gmail.com");
    expect(user.password).toBe("churros123");
    expect(user.age).toBe(19);
})

test("Should not create a user with invalid name", async function() {
    expect(() => new User(
        "Churros",
        "churros@gmail.com",
        "churros123",
        19
    )).toThrow(new Error("Invalid username"));
})

test("Should not create a user with invalid email", async function() {
    expect(() => new User(
        "Churros Augusto",
        "churros@gmail",
        "churros123",
        19
    )).toThrow(new Error("Invalid email"));
})

test("Should not create a user with invalid password", async function() {
    expect(() => new User(
        "Churros Augusto",
        "churros@gmail.com",
        "chur",
        19
    )).toThrow(new Error("Invalid password"));
})

test("Should not create a user with invalid age", async function() {
    expect(() => new User(
        "Churros Augusto",
        "churros@gmail.com",
        "churros123",
        8
    )).toThrow(new Error("Invalid age"));
})
