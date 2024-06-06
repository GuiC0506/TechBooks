import ParkingLot from "../source/core/entity/ParkingLot";
import EnterParkingLot from "../source/core/usecase/EnterParkingLot";
import GetParkingLot from "../source/core/usecase/GetParkingLot";
import ListParkingLots from "../source/core/usecase/ListParkingLot";
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
    expect(() =>
        enterParkingLot.execute("shopping", "FBC-4495", new Date("2024-05-06T09:00:00"))
    ).rejects.toThrow(new Error("The parking lot is full"));
})


test("Should return three parking lots", async function() {
    const parkingLotRepository = new ParkingLotRepositoryMemory();
    const listParkingLots = new ListParkingLots(parkingLotRepository);
    const outputListParkingLots = await listParkingLots.execute();
    expect(outputListParkingLots).toHaveLength(2);
    expect(outputListParkingLots[0]).toStrictEqual(new ParkingLot(
        "shopping", 5, 8, 22, 0
    ))
    expect(outputListParkingLots[1]).toStrictEqual(new ParkingLot(
        "airport", 10, 8, 22, 0
    ))

})
