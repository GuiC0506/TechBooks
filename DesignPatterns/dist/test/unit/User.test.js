"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../source/domain/entity/User"));
// test pyramid: unit > integration > e2e
test("Should create a user", async function () {
    const user = User_1.default.create("Churros Augusto", "churros@gmail.com", "churros123", 19);
    expect(user.name.getValue()).toBe("Churros Augusto");
    expect(user.email.getValue()).toBe("churros@gmail.com");
    expect(user.password).toBe("churros123");
    expect(user.age).toBe(19);
});
test("Should not create a user with invalid name", async function () {
    expect(() => User_1.default.create("Churros", "churros@gmail.com", "churros123", 19)).toThrow(new Error("Invalid name"));
});
test("Should not create a user with invalid email", async function () {
    expect(() => User_1.default.create("Churros Augusto", "churros@gmail", "churros123", 19)).toThrow(new Error("Invalid email"));
});
/* test("Should not create a user with invalid password", async function() {
    expect(() => User.create(
        "Churros Augusto",
        "churros@gmail.com",
        "chur",
        19
    )).toThrow(new Error("Invalid parameter"));
})

test("Should not create a user with invalid age", async function() {
    expect(() => User.create(
        "Churros Augusto",
        "churros@gmail.com",
        "churros123",
        8
    )).toThrow(new Error("Invalid parameter"));
}) */
