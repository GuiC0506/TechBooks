import ParkingLot from "../entity/ParkingLot"

export default interface ParkingLotRepository {
    getParkingLot(code: string): Promise<ParkingLot>
}
