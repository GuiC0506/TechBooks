import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class ListParkingLots {
    constructor(readonly parkingLotRepository: ParkingLotRepository) { }

    async execute() {
        return await this.parkingLotRepository.listParkingLots();
    }
}
