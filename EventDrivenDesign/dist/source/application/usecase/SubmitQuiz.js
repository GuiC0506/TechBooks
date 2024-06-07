"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubmitQuiz {
    constructor(quizRepository, mailer) {
        this.quizRepository = quizRepository;
        this.mailer = mailer;
    }
    async execute(input) {
        const quiz = await this.quizRepository.get(input.quizId);
        const questions = quiz.questions;
        let score = 0;
        for (const question of quiz.questions) {
            if (input.answers[question.id] === question.correctAnswer) {
                score++;
            }
        }
        const grade = ((score / quiz.questions.length) * 100);
        await this.mailer.send(input.email, `Hello, ${input.name}, your grade is ${grade}`);
        return {
            grade
        };
    }
}
exports.default = SubmitQuiz;
