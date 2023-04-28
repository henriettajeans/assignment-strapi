import axios, { AxiosResponse } from "axios"
import { IMobile, ICreatedMobile, IUpdateMobile } from "../src/models/IMobile"


const api = axios.create({
    baseURL: "http://localhost:1337/api"
})



   export const  getAll = async():Promise<IMobile[]> =>{
        const response = await api.get(`/mobiles`)
        return response.data;
    }


    export const  getById = async(id: number): Promise<IMobile>  =>{
        const response: AxiosResponse<IMobile> = await api.get(`/mobiles/${id}`);
        return response.data;
    }


    export const  deleteById = async(id: number): Promise<IMobile>  =>{
        const response: AxiosResponse<IMobile> = await api.delete(`/mobiles/${id}`);
        return response.data;
    }



export const create = async(data:ICreatedMobile): Promise<ICreatedMobile> =>{
 return  api.post(`/mobiles`, data)
}


export const update = async(id:number ,data:IUpdateMobile) =>{
    return  api.put(`/mobiles/${id}`, data)
   }