"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserAgeSpecification_1 = __importDefault(require("../specification/UserAgeSpecification"));
const UserEmailSpecification_1 = __importDefault(require("../specification/UserEmailSpecification"));
const UserNameSpecification_1 = __importDefault(require("../specification/UserNameSpecification"));
const UserPasswordSpecification_1 = __importDefault(require("../specification/UserPasswordSpecification"));
class User {
    constructor(name, email, password, age) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        const nameSpecification = new UserNameSpecification_1.default();
        const ageSpecification = new UserAgeSpecification_1.default();
        const passwordSpecification = new UserPasswordSpecification_1.default();
        const emailSpecification = new UserEmailSpecification_1.default();
        if (!nameSpecification
            .and(ageSpecification)
            .and(emailSpecification)
            .and(passwordSpecification)
            .isSatisfiedBy(this))
            throw new Error("Invalid parameter");
    }
}
exports.default = User;
