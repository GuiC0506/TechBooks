import QuizCorrected, { NotificationType } from "../../domain/event/QuizCorrected";
import Mailer from "../service/Mailer";
import SmsSender from "../service/SmsSender";
import Handler from "./Handler";

export default class QuizCommunicatorHandler implements Handler {
    eventName: string = "QuizCorrected";
    constructor(
        readonly mailer: Mailer,
        readonly smsSender: SmsSender
    ) { }
    async handle(event: QuizCorrected): Promise<void> {
        switch (event.type) {
            case NotificationType.email: this.mailer.send(event.email, `Hello, ${event.username}, your grade is ${event.grade}`); break;
            case NotificationType.sms: this.smsSender.send(event.phone, `Hello, ${event.username}, your grade is ${event.grade}`); break;
        }
    }
}
