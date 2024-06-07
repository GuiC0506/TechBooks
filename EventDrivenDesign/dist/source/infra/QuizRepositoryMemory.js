"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Answer_1 = __importDefault(require("../domain/entity/Answer"));
const Question_1 = __importDefault(require("../domain/entity/Question"));
const Quiz_1 = __importDefault(require("../domain/entity/Quiz"));
class QuizRepositoryMemory {
    constructor() {
        this.quizzes = [
            new Quiz_1.default(1, [
                new Question_1.default(1, "Javascript é legal", [
                    new Answer_1.default("a", "Sim")
                ], "a"),
                new Question_1.default(2, "Typescript is nice?", [
                    new Answer_1.default("a", "Sim")
                ], "a"),
            ])
        ];
    }
    async get(id) {
        const quiz = this.quizzes.find(quiz => quiz.id === id);
        if (!quiz)
            throw new Error("Quiz not found");
        return quiz;
    }
}
exports.default = QuizRepositoryMemory;
