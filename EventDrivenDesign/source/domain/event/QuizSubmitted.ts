import Answer from "../entity/Answer";
import DomainEvent from "./DomainEvent";

export default class QuizSubmitted implements DomainEvent {
    name: string = "QuizSubmitted"
    constructor
        (
            readonly quizId: number,
            readonly email: string,
            readonly answers: { [id: number]: string }
        ) { }
}
