import { randomBytes, pbkdf2 } from "crypto"
export default class Password {
    constructor(
        readonly value: string,
        readonly salt: string
    ) { }

    static async create(
        password: string,
        salt?: string
    ): Promise<Password> {
        const generatedSalt = salt || randomBytes(20).toString("hex");
        return new Promise((resolve) => {
            pbkdf2(password, generatedSalt, 100, 64, "sha512", (err, value) => {
                resolve(new Password(value.toString("hex"), generatedSalt));
            })
        })
    }

    async validate(plainPassword: string) {
        return new Promise((resolve) => {
            pbkdf2(plainPassword, this.salt, 100, 64, "sha512", (err, value) => {
                resolve(this.value === value.toString("hex"));
            })
        })
    }
}
