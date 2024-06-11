"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Specification_1 = require("./Specification");
class UserEmailSpecification extends Specification_1.AbstractSpecification {
    isSatisfiedBy(user) {
        return !!String(user.email).toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    }
}
exports.default = UserEmailSpecification;
