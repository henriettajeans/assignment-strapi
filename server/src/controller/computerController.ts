import {Request, Response} from "express"
import  * as data from "../../strapisource/computer.api"



    export const  getAllComputer = async(req: Request, res: Response) =>{

        try{
            const computers = await data.getAll();
            return res.status(200).json({message: "here you go!", data: computers});
        }catch(e){
            return res.status(500).json({message: "feild to read computer"})
        }

    }

   export const  getComputerById = async(req: Request, res: Response)  =>{
        const id = Number(req.params.id);
        try{
         const foundComputer = await data.getById(id);
         if(!foundComputer){
            return res.status(404).json({message: `computer not found`})
        }else{
            res.status(200).json(foundComputer)
        }
        
        }catch(e){
        return res.status(500).json({message: ` faild to find computer with id ${id} `})
        }
       
    }



   



    






