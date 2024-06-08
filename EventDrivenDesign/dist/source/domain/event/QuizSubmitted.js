"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuizSubmitted {
    constructor(quizId, userName, email, answers) {
        this.quizId = quizId;
        this.userName = userName;
        this.email = email;
        this.answers = answers;
        this.name = "QuizSubmitted";
    }
}
exports.default = QuizSubmitted;
