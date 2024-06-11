"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, password, age) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        if (name.split(" ").length < 2)
            throw new Error("Invalid parameter");
        if (!String(email).toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
            throw new Error("Invalid paramter");
        if (password.length < 6)
            throw new Error("Invalid parameter");
        if (age < 18)
            throw new Error("Invalid parameter");
    }
}
exports.default = User;
