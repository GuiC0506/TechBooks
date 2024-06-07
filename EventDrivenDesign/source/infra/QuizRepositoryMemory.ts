import Answer from "../domain/entity/Answer";
import Question from "../domain/entity/Question";
import Quiz from "../domain/entity/Quiz";
import QuizRepository from "../domain/repository/QuizRepository";

export default class QuizRepositoryMemory implements QuizRepository {
    quizzes: Quiz[];
    constructor() {
        this.quizzes = [
            new Quiz(1, [
                new Question(
                    1,
                    "Javascript é legal",
                    [
                        new Answer("a", "Sim")
                    ],
                    "a"
                ),
                new Question(
                    2,
                    "Typescript is nice?",
                    [
                        new Answer("a", "Sim")
                    ],
                    "a"
                ),
            ])
        ]
    }

    async get(id: number): Promise<Quiz> {
        const quiz = this.quizzes.find(quiz => quiz.id === id);
        if (!quiz) throw new Error("Quiz not found");
        return quiz;
    }
}
