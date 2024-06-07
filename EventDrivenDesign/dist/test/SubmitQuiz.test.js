"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SubmitQuiz_1 = __importDefault(require("../source/application/usecase/SubmitQuiz"));
const QuizRepositoryMemory_1 = __importDefault(require("../source/infra/repository/QuizRepositoryMemory"));
const MailerMemory_1 = __importDefault(require("../source/infra/service/MailerMemory"));
test("A user should submit a quiz and the grade should be calculated", async function () {
    const quizRepositoryMemory = new QuizRepositoryMemory_1.default();
    const mailer = new MailerMemory_1.default();
    const submitQuiz = new SubmitQuiz_1.default(quizRepositoryMemory, mailer);
    const input = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        quizId: 1,
        answers: {
            1: "a",
            2: "a"
        }
    };
    const output = await submitQuiz.execute(input);
    expect(output.grade).toBe(100);
});
test("A user should submit a quiz and the grade should be calculated and a email notification should be sent", async function () {
    const mailer = new MailerMemory_1.default();
    const quizRepositoryMemory = new QuizRepositoryMemory_1.default();
    const submitQuiz = new SubmitQuiz_1.default(quizRepositoryMemory, mailer);
    const input = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        quizId: 1,
        answers: {
            1: "a",
            2: "a"
        }
    };
    await submitQuiz.execute(input);
    expect(mailer.messages[0].message).toBe("Hello, John Doe, your grade is 100");
});
