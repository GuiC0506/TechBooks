"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuizCommunicatorHandler {
    constructor(mailer) {
        this.mailer = mailer;
        this.eventName = "QuizCorrected";
    }
    async handle(event) {
        this.mailer.send(event.email, `Hello, ${event.username}, your grade is 100`);
    }
}
exports.default = QuizCommunicatorHandler;
