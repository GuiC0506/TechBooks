"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuizCorrected_1 = require("../../domain/event/QuizCorrected");
class QuizCommunicatorHandler {
    constructor(mailer, smsSender) {
        this.mailer = mailer;
        this.smsSender = smsSender;
        this.eventName = "QuizCorrected";
    }
    async handle(event) {
        switch (event.type) {
            case QuizCorrected_1.NotificationType.email:
                this.mailer.send(event.email, `Hello, ${event.username}, your grade is ${event.grade}`);
                break;
            case QuizCorrected_1.NotificationType.sms:
                this.smsSender.send(event.phone, `Hello, ${event.username}, your grade is ${event.grade}`);
                break;
        }
    }
}
exports.default = QuizCommunicatorHandler;
