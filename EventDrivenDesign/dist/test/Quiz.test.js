"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Answer_1 = __importDefault(require("../source/domain/entity/Answer"));
const Question_1 = __importDefault(require("../source/domain/entity/Question"));
const Quiz_1 = __importDefault(require("../source/domain/entity/Quiz"));
test("Should create a quiz", function () {
    const questions = [
        new Question_1.default(1, "Javascript é legal", [
            new Answer_1.default("a", "Sim")
        ], "a"),
        new Question_1.default(2, "Typescript is nice?", [
            new Answer_1.default("a", "Sim")
        ], "a"),
    ];
    const quiz = new Quiz_1.default(1, questions);
    expect(quiz.id).toBe(1);
});
