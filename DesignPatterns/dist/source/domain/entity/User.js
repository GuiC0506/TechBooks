"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, password, age) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        if (name.split(" ").length < 2)
            throw new Error("Invalid username");
        if (!String(email).toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
            throw new Error("Invalid email");
        if (password.length < 6)
            throw new Error("Invalid password");
        if (age < 18)
            throw new Error("Invalid age");
    }
}
exports.default = User;
