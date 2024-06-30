import { Request,Response } from "express";
import creactCustomerService from "../services/CreactCustomerService";

class CreactCustomerController {

    async handle(req:Request,res:Response){
      
        const {name, email} = req.body as {name:string,email:string};

        const custumer = await creactCustomerService.execute({name,email});

        return res.send(custumer);
    }

}

export default new CreactCustomerController;