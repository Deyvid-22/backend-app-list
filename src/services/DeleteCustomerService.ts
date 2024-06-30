import prismaCliente from "../prisma";

interface DeleteCustomerServiceProps {
    id:string;
}


class DeleteCustomerService  {

    
    async execute({id}:DeleteCustomerServiceProps ){
        
        if (!id) {
             throw new Error("solicitaçao invalida.");
        }

        const findCustumer = await prismaCliente.custumer.findFirst({
            where:{
                id:id
            }
        })

        if(!findCustumer){
           throw new Error("client não existe");
        }

        await prismaCliente.custumer.delete({
            where:{
                id: findCustumer.id
            }
        })

        return {message:"deletado com sucesso"}
    }

}

export default new DeleteCustomerService;