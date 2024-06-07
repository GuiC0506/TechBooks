import QuizRepository from "../../domain/repository/QuizRepository";

export default class SubmitQuiz {
    constructor(readonly quizRepository: QuizRepository) { }

    async execute(input: Input): Promise<Output> {
        await this.quizRepository.get(input.quizId);
        return {
            grade: 100
        }
    }
}

type Input = {
    quizId: number,
    name: string,
    email: string,
    answers: { [id: number]: string }
}

type Output = {
    grade: number
}
