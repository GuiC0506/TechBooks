test("A user should submit a answered quiz", async function() {
    const quizRepositoryMemory = new QuizRepositoryMemory();
    const submitQuiz = new SubmitQuiz(quizRepositoryMemory);
    const input = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        quizId: 1,
        answers: {
            1: "a",
            2: "a"
        }
    }
    const output = submitQuiz.execute(input);
    expect(output.grade).toBe(100);
})
