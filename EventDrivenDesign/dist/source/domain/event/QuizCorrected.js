"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = void 0;
class QuizCorrected {
    constructor(username, type, email, phone, grade) {
        this.username = username;
        this.type = type;
        this.email = email;
        this.phone = phone;
        this.grade = grade;
        this.name = "QuizCorrected";
    }
}
exports.default = QuizCorrected;
var NotificationType;
(function (NotificationType) {
    NotificationType["email"] = "email";
    NotificationType["sms"] = "sms";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
