"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Email_1 = __importDefault(require("../VOs/Email"));
const Name_1 = __importDefault(require("../VOs/Name"));
class User {
    constructor(name, email, password, age) {
        /* if (!String(email).toLowerCase().match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )) throw new Error("Invalid parameter");
        if (password.length < 6) throw new Error("Invalid parameter");
        if (age < 18) throw new Error("Invalid parameter");  */
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
    }
    static create(name, email, password, age) {
        return new User(new Name_1.default(name), new Email_1.default(email), password, age);
    }
}
exports.default = User;
