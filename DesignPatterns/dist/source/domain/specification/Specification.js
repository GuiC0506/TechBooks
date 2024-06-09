"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestInterface {
    isSatisfiedBy(t) {
        console.log(t);
        return true;
    }
    and(other) {
        return this;
    }
}
const x = new TestInterface();
x.isSatisfiedBy(5);
