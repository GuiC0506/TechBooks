import QuizCommunicatorHandler from "../source/application/handler/QuizCommunicatorHandler";
import QuizCorrectorHandler from "../source/application/handler/QuizCorrectorHandler";
import SubmitQuiz from "../source/application/usecase/SubmitQuiz";
import { NotificationType } from "../source/domain/event/QuizCorrected";
import Mediator from "../source/infra/mediator/Mediator";
import QuizRepositoryMemory from "../source/infra/repository/QuizRepositoryMemory";
import MailerMemory from "../source/infra/service/MailerMemory";
import SmsSenderMemory from "../source/infra/service/SmsSenderMemory";

test("A user should submit a quiz and the grade should be calculated and a email notification should be sent", async function() {
    const mailer = new MailerMemory();
    const smsSender = new SmsSenderMemory();
    const quizRepositoryMemory = new QuizRepositoryMemory();
    const mediator = new Mediator();
    const quizCorrectorHandler = new QuizCorrectorHandler(quizRepositoryMemory, mediator)
    mediator.register(quizCorrectorHandler);

    const quizCommunicatorHandler = new QuizCommunicatorHandler(mailer, smsSender);
    mediator.register(quizCommunicatorHandler);

    const submitQuiz = new SubmitQuiz(mediator);
    const input = {
        name: "John Doe",
        email: "",
        phone: "999444555",
        notificationType: NotificationType.sms,
        quizId: 1,
        answers: {
            1: "a",
            2: "a"
        }
    }
    await submitQuiz.execute(input);
    expect(smsSender.sms[0].message).toBe("Hello, John Doe, your grade is 100");
})
