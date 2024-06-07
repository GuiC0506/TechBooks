import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../repository/ParkingLotRepository";

// use cases are independent
// abstracts funcionality, orchestrates entities
// it protects itself from external resources via the adapters
export default class EnterParkingLot {
    parkingLotRepository: ParkingLotRepository;
    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }
    // use cases are executed
    async execute(input: Input): Promise<Output> {
        const parkingLot = await this.parkingLotRepository.getParkingLot(input.code);
        const parkedCar = new ParkedCar(input.code, input.plate, input.date);
        if (!parkingLot.isOpen(parkedCar.date)) throw new Error("The parking lot is closed");
        if (parkingLot.isFull()) throw new Error("The parking lot is full")
        this.parkingLotRepository.saveParkedCar(parkedCar);
        return {
            plate: parkedCar.plate
        };
    }
}

type Input = {
    code: string,
    plate: string,
    date: Date
}

type Output = {
    plate: string
}
