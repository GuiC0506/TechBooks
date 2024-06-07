"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Answer_1 = __importDefault(require("../source/core/entity/Answer"));
const Question_1 = __importDefault(require("../source/core/entity/Question"));
const Quiz_1 = __importDefault(require("../source/core/entity/Quiz"));
test("Should create a quiz", function () {
    const questions = [
        new Question_1.default(1, "Javascript", [
            new Answer_1.default("a", "Sim")
        ], "a"),
    ];
    const quiz = new Quiz_1.default(1, questions);
    expect(quiz.id).toBe(1);
});
