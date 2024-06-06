import ParkedCar from "../entity/ParkedCar"
import ParkingLot from "../entity/ParkingLot"

export default interface ParkingLotRepository {
    getParkingLot(code: string): Promise<ParkingLot>
    saveParkedCar(parkedCar: ParkedCar): void;
    listParkingLots(): Promise<ParkingLot[]>;
}
