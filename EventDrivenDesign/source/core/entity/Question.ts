import Answer from "./Answer";

export default class Question {
    constructor(
        readonly id: number,
        readonly description: string,
        readonly answers: Answer[],
        readonly correctAnswer: string
    ) { }
}
