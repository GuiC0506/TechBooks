"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    constructor(id, description, answers, correctAnswer) {
        this.id = id;
        this.description = description;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}
exports.default = Question;
