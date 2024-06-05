import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

    parkingLots: ParkingLot[] = [
        new ParkingLot("shopping", 100, 8, 22)
    ]
    public parkedCars: ParkedCar[] = []

    getParkingLot(code: string): Promise<ParkingLot> {
        return Promise.resolve(this.parkingLots.find(parkingLot => parkingLot.code === code));
    }

    saveParkedCar(code: string, plate: string, date: Date): void {

    }
}
