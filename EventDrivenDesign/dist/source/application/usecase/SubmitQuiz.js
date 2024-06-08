"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QuizSubmitted_1 = __importDefault(require("../../domain/event/QuizSubmitted"));
class SubmitQuiz {
    constructor(mediator) {
        this.mediator = mediator;
    }
    async execute(input) {
        const event = new QuizSubmitted_1.default(input.quizId, input.name, input.email, input.answers);
        this.mediator.publish(event);
    }
}
exports.default = SubmitQuiz;
