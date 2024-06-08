"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsSenderMemory {
    constructor() {
        this.sms = [];
    }
    async send(phone, message) {
        this.sms.push({
            phone,
            message
        });
    }
}
exports.default = SmsSenderMemory;
