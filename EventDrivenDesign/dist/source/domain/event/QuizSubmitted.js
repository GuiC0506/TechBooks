"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuizSubmitted {
    constructor(quizId, notificationType, userName, email, phone, answers) {
        this.quizId = quizId;
        this.notificationType = notificationType;
        this.userName = userName;
        this.email = email;
        this.phone = phone;
        this.answers = answers;
        this.name = "QuizSubmitted";
    }
}
exports.default = QuizSubmitted;
