import { Request,Response } from "express";
import DeleteCustomerService from "../services/DeleteCustomerService";
class DeleteCustomerController {
    
    async handle(req:Request,res:Response){
        const {id} = req.query as {id:string}

        const custumerService = await DeleteCustomerService.execute({id});
        return res.send(custumerService);


    }

}

export default new DeleteCustomerController;