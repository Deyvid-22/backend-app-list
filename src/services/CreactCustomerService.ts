
import prismaCliente from "../prisma";

interface creatCustomerProps {
    name:string,
    email:string
}

class CreactCustomerService {

    async execute({name,email}:creatCustomerProps) {
        
        if(!email || !name){
           throw new Error("preencha todos os campos");
        }

        const custumer = await prismaCliente.custumer.create({
            data:{
                name,
                email,
                status:true
            }
        })
      return custumer;
    }

}

export default new CreactCustomerService;