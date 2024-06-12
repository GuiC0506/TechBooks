"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Email_1 = __importDefault(require("../../source/domain/VOs/Email"));
test("Should create a valid email", async function () {
    const email = new Email_1.default("churros@gmail.com");
    expect(email.getValue()).toBe("churros@gmail.com");
});
test("Should not create a valid email", async function () {
    expect(() => new Email_1.default("churros@gmail")).toThrow(new Error("Invalid email"));
});
