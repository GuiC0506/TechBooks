import Answer from "../source/domain/entity/Answer";
import Question from "../source/domain/entity/Question";
import Quiz from "../source/domain/entity/Quiz";

test("Should create a quiz", function() {
    const questions: Question[] = [
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

    ]
    const quiz = new Quiz(1, questions);
    expect(quiz.id).toBe(1);
})
