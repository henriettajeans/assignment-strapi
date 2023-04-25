import axios, { AxiosResponse } from "axios"
import { IComputer } from "../src/models/IComputer"


const api = axios.create({
    baseURL: "http://localhost:1337/api"
})



   export const  getAll = async():Promise<IComputer[]> =>{
        const response = await api.get(`/computers`)
        return response.data;
    }


    export const  getById = async(id: number): Promise<IComputer>  =>{
        const response: AxiosResponse<IComputer> = await api.get(`/computers/${id}`);
        return response.data;
    }




