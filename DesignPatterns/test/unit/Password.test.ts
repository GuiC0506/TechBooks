import Password from "../../source/domain/VOs/Password";

test("Should create a password", async function() {
    const password = await Password.create("12345678", "salt");
    expect(password.value).toBe("...");
    expect(password.salt).toBe("salt")
})
