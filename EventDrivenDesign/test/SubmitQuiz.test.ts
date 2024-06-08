import QuizCommunicatorHandler from "../source/application/handler/QuizCommunicatorHandler";
import QuizCorrectorHandler from "../source/application/handler/QuizCorrectorHandler";
import SubmitQuiz from "../source/application/usecase/SubmitQuiz";
import Mediator from "../source/infra/mediator/Mediator";
import QuizRepositoryMemory from "../source/infra/repository/QuizRepositoryMemory";
import MailerMemory from "../source/infra/service/MailerMemory";

test("A user should submit a quiz and the grade should be calculated and a email notification should be sent", async function() {
    const mailer = new MailerMemory();
    const quizRepositoryMemory = new QuizRepositoryMemory();
    const mediator = new Mediator();
    const quizCorrectorHandler = new QuizCorrectorHandler(quizRepositoryMemory, mediator)
    mediator.register(quizCorrectorHandler);

    const quizCommunicatorHandler = new QuizCommunicatorHandler(mailer);
    mediator.register(quizCommunicatorHandler);

    const submitQuiz = new SubmitQuiz(mediator);
    const input = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        quizId: 1,
        answers: {
            1: "a",
            2: "a"
        }
    }
    await submitQuiz.execute(input);
    expect(mailer.messages[0].message).toBe("Hello, John Doe, your grade is 100");
})
