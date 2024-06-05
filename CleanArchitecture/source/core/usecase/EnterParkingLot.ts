import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
    parkingLotRepository: ParkingLotRepository;
    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }
    // use cases are executed
    async execute(code: string, plate: string, date: Date) {
        const parkingLot = await this.parkingLotRepository.getParkingLot(code);
        const parkedCar = new ParkedCar(code, plate, date);
        if (!parkingLot.isOpen(parkedCar.date)) throw new Error("The parking lot is closed");
        await this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date);
        return parkingLot;
    }
}
