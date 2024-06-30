import prismaCliente from "../prisma";

class ListCustumerService {
    async execute(){
       const custumer = await prismaCliente.custumer.findMany()
       return custumer;
    }

}

export default new ListCustumerService;