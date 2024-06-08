import QuizCorrected from "../../domain/event/QuizCorrected";
import QuizSubmitted from "../../domain/event/QuizSubmitted";
import QuizRepository from "../../domain/repository/QuizRepository";
import Mediator from "../../infra/mediator/Mediator";
import Handler from "./Handler";

export default class QuizCorrectorHandler implements Handler {

    // name of the event that it reacts
    eventName: string = "QuizSubmitted";
    constructor(
        readonly quizRepository: QuizRepository,
        readonly mediator: Mediator
    ) { }
    async handle(event: QuizSubmitted): Promise<void> {
        const quiz = await this.quizRepository.get(event.quizId);
        let score = 0;
        for (const question of quiz.questions) {
            if (event.answers[question.id] === question.correctAnswer) {
                score++;
            }
        }
        const grade = ((score / quiz.questions.length) * 100);
        const quizCorrected = new QuizCorrected(event.userName, event.email, grade);
        this.mediator.publish(quizCorrected);
    }
}
