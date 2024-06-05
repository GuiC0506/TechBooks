import ParkingLotRepositoryMemory from "../../infra/repository/ParkingLotRepositoryMemory";
import ParkingLot from "../entity/ParkingLot";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class GetParkingLot {
    parkingLotRepository: ParkingLotRepository;
    constructor(parkingLotRepository: ParkingLotRepositoryMemory) {
        this.parkingLotRepository = parkingLotRepository;
    }

    execute(code: string): Promise<ParkingLot> {
        return this.parkingLotRepository.getParkingLot(code);
    }
}
