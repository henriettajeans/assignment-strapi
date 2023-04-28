export interface IComputer{
    id?: number;
    name: string;
    description: string;
    creator: string;
    processor:string;
    price:number;
}


export interface ICreatedComputer {
 data:IComputer

}

export interface IUpdateComputer {
    data:IComputer
   
   }
   