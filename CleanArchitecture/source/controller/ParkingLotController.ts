import { Request } from "express";
import GetParkingLot from "../core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../infra/repository/ParkingLotRepositoryMemory";

export default class ParkingLotController {
    static async getParkingLot(params, body) {
        const parkingLotRepository = new ParkingLotRepositoryMemory();
        const getParkingLot = new GetParkingLot(parkingLotRepository);
        const parkingLot = await getParkingLot.execute("shopping");
        return parkingLot;
    }
}
