import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

    parkingLots = [
        {
            code: "shopping",
            capacity: 5,
            openHour: 8,
            closeHour: 22,
        }
    ]
    public parkedCars: ParkedCar[] = []

    async getParkingLot(code: string): Promise<ParkingLot> {
        const parkingLotData = this.parkingLots.find(parkingLot => parkingLot.code === code);
        const occupiedSpaces: number = this.parkedCars.length;

        // utilize the adapter to convert data from external resources to domain objects
        const parkingLot = ParkingLotAdapter.create(
            parkingLotData.code,
            parkingLotData.capacity,
            parkingLotData.openHour,
            parkingLotData.closeHour,
            occupiedSpaces
        );
        return parkingLot;
    }

    async saveParkedCar(parkedCar: ParkedCar): Promise<void> {
        this.parkedCars.push(parkedCar);
    }
}
