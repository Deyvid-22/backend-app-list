import { Request,Response } from "express";
import ListCustumerService from "../services/ListCustomerService";

class ListCustomerCrontroller {
    
    async handle(req:Request,res:Response){

        const custumer = await ListCustumerService.execute();
        
        return res.json(custumer)
    }

}

export default new ListCustomerCrontroller;