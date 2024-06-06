import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

    parkingLots: ParkingLot[] = [
        new ParkingLot("shopping",
            5,
            8,
            22,
            0),
        new ParkingLot("airport",
            10,
            8,
            22,
            0)
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

    async listParkingLots(): Promise<ParkingLot[]> {
        return await this.parkingLots;
    }
}
