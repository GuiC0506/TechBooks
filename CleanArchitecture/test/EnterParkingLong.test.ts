import EnterParkingLot from "../source/core/usecase/EnterParkingLot";
import GetParkingLot from "../source/core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../source/infra/repository/ParkingLotRepositoryMemory";

// the idea is a test to use a Use Case
test("Should enter parking lot", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "FBC-4490", new Date("2024-05-06T09:55:00"));
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
})

test("Should be closed", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "FBC-4490", new Date("2024-05-06T23:00:00"));
})

test("Should be full", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "FBC-4490", new Date("2024-05-06T09:00:00"));
    await enterParkingLot.execute("shopping", "FBC-4491", new Date("2024-05-06T09:00:00"));
    await enterParkingLot.execute("shopping", "FBC-4492", new Date("2024-05-06T09:00:00"));
    await enterParkingLot.execute("shopping", "FBC-4493", new Date("2024-05-06T09:00:00"));
    await enterParkingLot.execute("shopping", "FBC-4494", new Date("2024-05-06T09:00:00"));
    await enterParkingLot.execute("shopping", "FBC-4495", new Date("2024-05-06T09:00:00"));
})
