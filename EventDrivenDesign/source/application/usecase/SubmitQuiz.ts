import QuizSubmitted from "../../domain/event/QuizSubmitted";
import QuizRepository from "../../domain/repository/QuizRepository";
import Mailer from "../service/Mailer";

export default class SubmitQuiz {
    constructor(
        readonly quizRepository: QuizRepository,
        readonly mailer: Mailer,
        readonly mediator: Mediator
    ) { }

    async execute(input: Input): Promise<Output> {
        const event = new QuizSubmitted(input.quizId, input.email, input.answers);
        this.mediator.publish()
        /* const quiz = await this.quizRepository.get(input.quizId);
        const questions = quiz.questions;
        let score = 0;
        for (const question of quiz.questions) {
            if (input.answers[question.id] === question.correctAnswer) {
                score++;
            }
        }
        const grade = ((score / quiz.questions.length) * 100);
        await this.mailer.send(input.email, `Hello, ${input.name}, your grade is ${grade}`);
        return {
            grade
        } */
    }
}

type Input = {
    quizId: number,
    name: string,
    email: string,
    answers: { [id: number]: string }
}

type Output = {
    grade: number
}
