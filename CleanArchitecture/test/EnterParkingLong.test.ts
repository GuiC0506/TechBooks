import EnterParkingLot from "../source/core/usecase/EnterParkingLot";

// the idea is a test to use a Use Case
test("Should enter parking lot", function() {
    const enterParkingLot = new EnterParkingLot();
    const parkingLot = enterParkingLot.execute();
    expect(parkingLot.code).toBe("shopping");
})
