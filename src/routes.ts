import Router from "express";
import CreactCustomerController from "./controllers/CreactCustomerController";
import ListCustomerController from "./controllers/ListCustomerController";
import DeleteCustomerController from "./controllers/DeleteCustomerController";
const router = Router();

router.post("/customer", CreactCustomerController.handle);
router.get("/customer", ListCustomerController.handle);
router.delete("/customer", DeleteCustomerController.handle)


export {router};