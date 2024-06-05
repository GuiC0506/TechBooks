import EnterParkingLot from "../source/core/usecase/EnterParkingLot";
import GetParkingLot from "../source/core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../source/infra/repository/ParkingLotRepositoryMemory";

// the idea is a test to use a Use Case
test("Should enter parking lot", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    console.log(parkingLotBeforeEnter)
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "FBC-4490", new Date("2024-05-06T09:55:00"));
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
})