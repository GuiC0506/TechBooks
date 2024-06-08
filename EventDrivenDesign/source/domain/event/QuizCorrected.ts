import DomainEvent from "./DomainEvent";

export default class QuizCorrected implements DomainEvent {
    name: string = "QuizCorrected";

    constructor(
        readonly username: string,
        readonly email: string,
        readonly grade: number
    ) { }
}
