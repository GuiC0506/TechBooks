"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndSpecification = exports.AbstractSpecification = void 0;
class AbstractSpecification {
    and(other) {
        return new AndSpecification(this, other);
    }
}
exports.AbstractSpecification = AbstractSpecification;
class AndSpecification extends AbstractSpecification {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }
    isSatisfiedBy(t) {
        return this.left.isSatisfiedBy(t) && this.right.isSatisfiedBy(t);
    }
}
exports.AndSpecification = AndSpecification;
