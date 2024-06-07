import Mailer from "../../application/service/Mailer";

export default class MailerMemory implements Mailer {

    messages: Message[];
    constructor() {
        this.messages = [];
    }

    async send(recipient: string, message: string): Promise<void> {
        this.messages.push({
            message,
            recipient
        })
    }
}

type Message = {
    recipient: string,
    message: string
}
