"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QuizCorrected_1 = __importDefault(require("../../domain/event/QuizCorrected"));
class QuizCorrectorHandler {
    constructor(quizRepository, mediator) {
        this.quizRepository = quizRepository;
        this.mediator = mediator;
        // name of the event that it reacts
        this.eventName = "QuizSubmitted";
    }
    async handle(event) {
        const quiz = await this.quizRepository.get(event.quizId);
        let score = 0;
        for (const question of quiz.questions) {
            if (event.answers[question.id] === question.correctAnswer) {
                score++;
            }
        }
        const grade = ((score / quiz.questions.length) * 100);
        const quizCorrected = new QuizCorrected_1.default(event.userName, event.notificationType, event.email, event.phone, grade);
        this.mediator.publish(quizCorrected);
    }
}
exports.default = QuizCorrectorHandler;
