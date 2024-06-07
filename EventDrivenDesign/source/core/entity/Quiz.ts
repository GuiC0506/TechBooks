import Question from "./Question";

export default class Quiz {
    constructor(readonly id: number, readonly questions: Question[]) { }
}
