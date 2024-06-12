"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Specification_1 = require("./Specification");
class UserPasswordSpecification extends Specification_1.AbstractSpecification {
    isSatisfiedBy(user) {
        return user.password.length >= 6;
    }
}
exports.default = UserPasswordSpecification;
