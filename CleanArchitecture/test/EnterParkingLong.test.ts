import EnterParkingLot from "../source/core/usecase/EnterParkingLot";
import ParkingLotRepositoryMemory from "../source/infra/repository/ParkingLotRepositoryMemory";

// the idea is a test to use a Use Case
test("Should enter parking lot", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const parkingLot = await enterParkingLot.execute("shopping");
    expect(parkingLot.code).toBe("shopping");
})
