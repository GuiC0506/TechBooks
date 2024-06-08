"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QuizCommunicatorHandler_1 = __importDefault(require("../source/application/handler/QuizCommunicatorHandler"));
const QuizCorrectorHandler_1 = __importDefault(require("../source/application/handler/QuizCorrectorHandler"));
const SubmitQuiz_1 = __importDefault(require("../source/application/usecase/SubmitQuiz"));
const QuizCorrected_1 = require("../source/domain/event/QuizCorrected");
const Mediator_1 = __importDefault(require("../source/infra/mediator/Mediator"));
const QuizRepositoryMemory_1 = __importDefault(require("../source/infra/repository/QuizRepositoryMemory"));
const MailerMemory_1 = __importDefault(require("../source/infra/service/MailerMemory"));
const SmsSenderMemory_1 = __importDefault(require("../source/infra/service/SmsSenderMemory"));
test("A user should submit a quiz and the grade should be calculated and a email notification should be sent", async function () {
    const mailer = new MailerMemory_1.default();
    const smsSender = new SmsSenderMemory_1.default();
    const quizRepositoryMemory = new QuizRepositoryMemory_1.default();
    const mediator = new Mediator_1.default();
    const quizCorrectorHandler = new QuizCorrectorHandler_1.default(quizRepositoryMemory, mediator);
    mediator.register(quizCorrectorHandler);
    const quizCommunicatorHandler = new QuizCommunicatorHandler_1.default(mailer, smsSender);
    mediator.register(quizCommunicatorHandler);
    const submitQuiz = new SubmitQuiz_1.default(mediator);
    const input = {
        name: "John Doe",
        email: "",
        phone: "999444555",
        notificationType: QuizCorrected_1.NotificationType.sms,
        quizId: 1,
        answers: {
            1: "a",
            2: "a"
        }
    };
    await submitQuiz.execute(input);
    expect(smsSender.sms[0].message).toBe("Hello, John Doe, your grade is 100");
});
