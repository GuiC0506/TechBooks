import SmsSender from "../../application/service/SmsSender";

export default class SmsSenderMemory implements SmsSender {
    sms: SmsMessage[];
    constructor() {
        this.sms = []
    }

    async send(phone: string, message: string): Promise<void> {
        this.sms.push({
            phone,
            message
        })
    }
}

type SmsMessage = {
    phone: string,
    message: string
}
