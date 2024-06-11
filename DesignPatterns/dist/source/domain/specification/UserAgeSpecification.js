"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Specification_1 = require("./Specification");
class UserAgeSpecification extends Specification_1.AbstractSpecification {
    isSatisfiedBy(user) {
        return user.age >= 18;
    }
}
exports.default = UserAgeSpecification;
