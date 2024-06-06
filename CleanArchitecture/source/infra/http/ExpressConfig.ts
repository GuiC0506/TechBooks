import Express from "express"
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";

const app = Express();
// the controller is not coupled to the http framework. This is beautiful
// the http adapters adapters http libs to your controllers, so that the controller don't need to change
// the controller enters in the core, interacts with the use cases
app.get("/parkingLots2/:code", ExpressAdapter.create(ParkingLotController.getParkingLot));
app.listen(3000);
