import Email from "../../source/domain/VOs/Email";

test("Should create a valid email", async function() {
    const email = new Email("churros@gmail.com");
    expect(email.getValue()).toBe("churros@gmail.com");
})

test("Should not create a valid email", async function() {
    expect(() => new Email("churros@gmail")).toThrow(new Error("Invalid email"));
})
