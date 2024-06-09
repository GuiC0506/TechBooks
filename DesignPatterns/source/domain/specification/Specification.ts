export interface Specification<T> {
    isSatisfiedBy(t: T): boolean;
    and(other: Specification<T>): Specification<T>;
}

export abstract class AbstractSpecification<T> implements Specification<T> {
    abstract isSatisfiedBy(t: T): boolean;
    and(other: Specification<T>): Specification<T> {
    }
}
