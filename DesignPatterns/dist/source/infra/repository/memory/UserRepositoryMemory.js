"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepositoryMemory {
    constructor() {
        this.users = [];
    }
    async save(user) {
        this.users.push(user);
    }
    async getByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}
exports.default = UserRepositoryMemory;
