"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    constructor(email) {
        if (!String(email).toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
            throw new Error("Invalid email");
        this.value = email;
    }
    getValue() {
        return this.value;
    }
}
exports.default = Email;
