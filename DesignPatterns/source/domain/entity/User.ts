import Email from "../VOs/Email";
import Name from "../VOs/Name";
import Password from "../VOs/Password";

export default class User {
    private constructor(
        readonly name: Name,
        readonly email: Email,
        readonly password: Password,
        readonly age: number
    ) { }

    static async create(
        name: string,
        email: string,
        password: string,
        age: number
    ) {
        if (age < 18) throw new Error("Invalid age");
        if (password.length < 7) throw new Error("Invalid password")
        return new User(new Name(name), new Email(email), await Password.create(password, "salt"), age)
    }

    async validatePassword(password: string) {
        return this.password.validate(password);
    }
}
