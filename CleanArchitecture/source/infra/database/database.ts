import pgPromise from "pg-promise";

const pgp = pgPromise({})

const database = pgp({
    user: "postgres",
    password: "admin",
    port: 5436,
    host: "localhost"
})

export {
    database
}
