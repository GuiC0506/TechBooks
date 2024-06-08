import DomainEvent from "./DomainEvent";

export default class QuizCorrected implements DomainEvent {
    name: string = "QuizCorrected";

    constructor(
        readonly username: string,
        readonly type: NotificationType,
        readonly email: string,
        readonly phone: string,
        readonly grade: number
    ) { }
}

export enum NotificationType {
    email = "email",
    sms = "sms"
}
