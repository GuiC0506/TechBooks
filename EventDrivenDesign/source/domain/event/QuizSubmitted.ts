import DomainEvent from "./DomainEvent";
import { NotificationType } from "./QuizCorrected";

export default class QuizSubmitted implements DomainEvent {
    name: string = "QuizSubmitted"
    constructor
        (
            readonly quizId: number,
            readonly notificationType: NotificationType,
            readonly userName: string,
            readonly email: string,
            readonly phone: string,
            readonly answers: { [id: number]: string }
        ) { }
}
