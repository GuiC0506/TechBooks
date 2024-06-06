import Hapi from "@hapi/hapi";
import HappiAdapter from "../../adapter/HappiAdapter";
import ParkingLotController from "../../controller/ParkingLotController";
const server = Hapi.server({
    port: 3000,
    host: "localhost"
})

server.route({
    method: "GET",
    path: "/parkingLot/{code}",
    handler: HappiAdapter.create(ParkingLotController.getParkingLot)
})

server.start();
