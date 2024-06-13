import CheckAuth from "../../source/application/usecase/CheckAuth";

test("Should be authenticated", async function() {
    const checkAuth = new CheckAuth();
    const input = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNodXJyb3NAZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMH0.wHKb2qHoCiDqgbSO6qxoOfRg8lC9IEZ-wpUKFTyfM7Y"
    }
    const output = await checkAuth.execute(input.token);
    expect(output.email).toBe("churros@gmail.com");
})
