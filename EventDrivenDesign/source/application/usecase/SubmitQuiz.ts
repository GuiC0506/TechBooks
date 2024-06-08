import { NotificationType } from "../../domain/event/QuizCorrected";
import QuizSubmitted from "../../domain/event/QuizSubmitted";
import Mediator from "../../infra/mediator/Mediator";

export default class SubmitQuiz {
    constructor(
        readonly mediator: Mediator
    ) { }

    async execute(input: Input): Promise<void> {
        const event = new QuizSubmitted(input.quizId, input.notificationType, input.name, input.email, input.phone, input.answers);
        this.mediator.publish(event);
    }
}

type Input = {
    quizId: number,
    notificationType: NotificationType,
    name: string,
    email: string,
    phone: string,
    answers: { [id: number]: string }
}
