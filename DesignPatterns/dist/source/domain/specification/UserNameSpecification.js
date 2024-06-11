"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Specification_1 = require("./Specification");
class UserAgeSpecification extends Specification_1.AbstractSpecification {
    isSatisfiedBy(user) {
        return user.name.split(" ").length >= 2;
    }
}
exports.default = UserAgeSpecification;
