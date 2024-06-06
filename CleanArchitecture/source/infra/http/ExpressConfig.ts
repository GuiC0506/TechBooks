import Express, { Request, Response } from "express"
import GetParkingLot from "../../core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../repository/ParkingLotRepositoryMemory";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";
const app = Express();

app.get("/parkingLots1/:code", async function(req: Request, res: Response) {
    const parkingLotRepository = new ParkingLotRepositoryMemory();
    const getParkingLot = new GetParkingLot(parkingLotRepository);
    const parkingLot = await getParkingLot.execute("shopping");
    return res.json(parkingLot);
})

app.get("/parkingLots2/:code", ExpressAdapter.create(ParkingLotController.getParkingLot));

app.listen(3000);
