"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Name {
    constructor(name) {
        if (name.split(" ").length < 2)
            throw new Error("Invalid name");
        this.value = name;
    }
    getValue() {
        return this.value;
    }
}
exports.default = Name;
