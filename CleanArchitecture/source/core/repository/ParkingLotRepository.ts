import ParkedCar from "../entity/ParkedCar"
import ParkingLot from "../entity/ParkingLot"

// it is part of the dependecy inversion
// so it its easy to test and decouple persistency mechanism from use cases
export default interface ParkingLotRepository {
    getParkingLot(code: string): Promise<ParkingLot>
    saveParkedCar(parkedCar: ParkedCar): void;
    listParkingLots(): Promise<ParkingLot[]>;
    listParkedCars(): Promise<ParkedCar[]>;
    removeParkedCar(plate: string): Promise<void>;
}
