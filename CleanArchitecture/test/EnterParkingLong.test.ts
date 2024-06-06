import ParkingLot from "../source/core/entity/ParkingLot";
import EnterParkingLot from "../source/core/usecase/EnterParkingLot";
import GetParkingLot from "../source/core/usecase/GetParkingLot";
import LeaveParkingLot from "../source/core/usecase/LeaveParkingLot";
import ListParkingLots from "../source/core/usecase/ListParkingLot";
import ParkingLotRepositoryMemory from "../source/infra/repository/ParkingLotRepositoryMemory";

// the idea is a test to use a Use Case
test("Should enter parking lot", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    const enterParkingLotInput1 = {
        code: "shopping",
        plate: "FBC-4491",
        date: new Date("2024-05-06T09:00:00")
    }
    await enterParkingLot.execute(enterParkingLotInput1);
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
})

test("Should leave parking lot", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const leaveParkingLot = new LeaveParkingLot(parkingLotRepositoryMemory);
    const enterParkingLotInput1 = {
        code: "shopping",
        plate: "FBC-4491",
        date: new Date("2024-05-06T09:00:00")
    }
    enterParkingLot.execute(enterParkingLotInput1);
    leaveParkingLot.execute(enterParkingLotInput1.plate);
    const parkedCars = await parkingLotRepositoryMemory.listParkedCars();
    expect(parkedCars).not.toContain(enterParkingLotInput1.plate);
})

test("Should be closed", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    const enterParkingLotInput1 = {
        code: "shopping",
        plate: "FBC-4491",
        date: new Date("2024-05-06T09:00:00")
    }
    await enterParkingLot.execute(enterParkingLotInput1);
})

test("Should return plate FBC-4491", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const enterParkingLotInput1 = {
        code: "shopping",
        plate: "FBC-4491",
        date: new Date("2024-05-06T09:00:00")
    }

    const parkedCarPlate = await enterParkingLot.execute(enterParkingLotInput1);
    expect(parkedCarPlate.plate).toBe(enterParkingLotInput1.plate);
})

test("Should be full", async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    const enterParkingLotInput1 = {
        code: "shopping",
        plate: "FBC-4491",
        date: new Date("2024-05-06T09:00:00")
    }
    const enterParkingLotInput2 = {
        code: "shopping",
        plate: "FBC-4492",
        date: new Date("2024-05-06T09:00:00")
    }
    const enterParkingLotInput3 = {
        code: "shopping",
        plate: "FBC-4493",
        date: new Date("2024-05-06T09:00:00")
    }
    const enterParkingLotInput4 = {
        code: "shopping",
        plate: "FBC-4494",
        date: new Date("2024-05-06T09:00:00")
    }
    const enterParkingLotInput5 = {
        code: "shopping",
        plate: "FBC-4495",
        date: new Date("2024-05-06T09:00:00")
    }

    const enterParkingLotInput6 = {
        code: "shopping",
        plate: "FBC-4496",
        date: new Date("2024-05-06T09:00:00")
    }
    await enterParkingLot.execute(enterParkingLotInput1);
    await enterParkingLot.execute(enterParkingLotInput2);
    await enterParkingLot.execute(enterParkingLotInput3);
    await enterParkingLot.execute(enterParkingLotInput4);
    await enterParkingLot.execute(enterParkingLotInput5);
    expect(() =>
        enterParkingLot.execute(enterParkingLotInput6)
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
