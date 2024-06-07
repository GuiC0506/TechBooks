"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MailerMemory {
    constructor() {
        this.messages = [];
    }
    async send(recipient, message) {
        this.messages.push({
            message,
            recipient
        });
    }
}
exports.default = MailerMemory;
