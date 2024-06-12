import Email from "../VOs/Email";
import Name from "../VOs/Name";

export default class User {
    private constructor(
        readonly name: Name,
        readonly email: Email,
        readonly password: string,
        readonly age: number
    ) { }

    static create(
        name: string,
        email: string,
        password: string,
        age: number
    ) {
        if (age < 18) throw new Error("Invalid age");
        if (password.length < 7) throw new Error("Invalid password")
        return new User(new Name(name), new Email(email), password, age)
    }
}
