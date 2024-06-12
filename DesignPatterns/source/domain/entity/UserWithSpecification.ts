import UserAgeSpecification from "../specification/UserAgeSpecification";
import UserEmailSpecification from "../specification/UserEmailSpecification";
import UserNameSpecification from "../specification/UserNameSpecification";
import UserPasswordSpecification from "../specification/UserPasswordSpecification";

export default class User {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly age: number
    ) {
        const nameSpecification = new UserNameSpecification();
        const ageSpecification = new UserAgeSpecification();
        const passwordSpecification = new UserPasswordSpecification();
        const emailSpecification = new UserEmailSpecification();
        if (!nameSpecification
            .and(ageSpecification)
            .and(emailSpecification)
            .and(passwordSpecification)
            .isSatisfiedBy(this)
        ) throw new Error("Invalid parameter");
    }
}
