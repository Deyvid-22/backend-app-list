import Router from "express";
import CreactCustomerController from "./controllers/CreactCustomerController";
import ListCustomerController from "./controllers/ListCustomerController";
import DeleteCustomerController from "./controllers/DeleteCustomerController";
const router = Router();

router.post("/custumer", CreactCustomerController.handle);
router.get("/custumer", ListCustomerController.handle);
router.delete("/custumer", DeleteCustomerController.handle)


export {router};