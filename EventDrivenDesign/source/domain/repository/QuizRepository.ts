import Quiz from "../entity/Quiz";

export default interface QuizRepository {
    get(id: number): Promise<Quiz>
}
