import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class LeaveParkingLot {
    constructor(readonly parkingLotRepository: ParkingLotRepository) { }

    async execute(plate: string) {
        const parkedCars = await this.parkingLotRepository.listParkedCars();
        const parkedCar = parkedCars.find(car => car.plate === plate);
        if (!parkedCar) throw new Error("Car is not in the parking lot");
        this.parkingLotRepository.removeParkedCar(parkedCar.plate);
    }
}
