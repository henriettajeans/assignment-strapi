import axios, { AxiosResponse } from "axios"
import { IAudio, ICreatedAudio, IUpdateAudio } from "../src/models/IAudio"


const api = axios.create({
    baseURL: "http://localhost:1337/api"
})



   export const  getAll = async():Promise<IAudio[]> =>{
        const response = await api.get(`/audio-devices`)
        return response.data;
    }


    export const  getById = async(id: number): Promise<IAudio>  =>{
        const response: AxiosResponse<IAudio> = await api.get(`/audio-devices/${id}`);
        return response.data;
    }


    export const  deleteById = async(id: number): Promise<IAudio>  =>{
        const response: AxiosResponse<IAudio> = await api.delete(`/audio-devices/${id}`);
        return response.data;
    }



export const create = async(data:ICreatedAudio): Promise<ICreatedAudio> =>{
 return  api.post(`/audio-devices`, data)
}


export const update = async(id:number ,data:IUpdateAudio) =>{
    return  api.put(`/audio-devices/${id}`, data)
   }