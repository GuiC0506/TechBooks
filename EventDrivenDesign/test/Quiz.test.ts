import Answer from "../source/core/entity/Answer";
import Question from "../source/core/entity/Question";
import Quiz from "../source/core/entity/Quiz";

test("Should create a quiz", function() {
    const questions: Question[] = [
        new Question(1, "Javascript",
            [
                new Answer("a", "Sim")
            ], "a"
        ),
    ]
    const quiz = new Quiz(1, questions);
    expect(quiz.id).toBe(1);
})
