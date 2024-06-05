import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
    parkingLotRepository: ParkingLotRepository;
    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }
    // use cases are executed
    async execute(code: string) {
        const parkingLot = await this.parkingLotRepository.getParkingLot(code);
        return parkingLot;
    }
}
