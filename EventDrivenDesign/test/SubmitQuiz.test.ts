import SubmitQuiz from "../source/application/usecase/SubmitQuiz";
import QuizRepositoryMemory from "../source/infra/repository/QuizRepositoryMemory";
import MailerMemory from "../source/infra/service/MailerMemory";

test("A user should submit a quiz and the grade should be calculated", async function() {
    const quizRepositoryMemory = new QuizRepositoryMemory();
    const mailer = new MailerMemory();
    const submitQuiz = new SubmitQuiz(quizRepositoryMemory, mailer);
    const input = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        quizId: 1,
        answers: {
            1: "a",
            2: "a"
        }
    }
    const output = await submitQuiz.execute(input);
    expect(output.grade).toBe(100);
})


test("A user should submit a quiz and the grade should be calculated and a email notification should be sent", async function() {
    const mailer = new MailerMemory();
    const quizRepositoryMemory = new QuizRepositoryMemory();
    const submitQuiz = new SubmitQuiz(quizRepositoryMemory, mailer);
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
