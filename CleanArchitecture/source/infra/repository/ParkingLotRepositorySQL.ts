import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import { database } from "../database/database";

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
    async listParkingLots(): Promise<ParkingLot[]> {
        const parkingLotsData = await database.manyOrNone("select *  from clean_arch.parking_lots;");
        const parkingLotsAdapted = parkingLotsData.map(parkingLot => ParkingLotAdapter.create(
            parkingLot.code,
            parkingLot.capacity,
            parkingLot.open_hour,
            parkingLot.close_hour,
            0
        ))
        return parkingLotsAdapted;
    }

    async listParkedCars(): Promise<ParkedCar[]> {

    }

    async removeParkedCar(plate: string): Promise<void> {

    }

    async getParkingLot(code: string): Promise<ParkingLot> {

    }

    async saveParkedCar(parkedCar: ParkedCar): void {

    }
}
