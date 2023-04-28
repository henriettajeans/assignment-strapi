export interface ITelevision{
    id?: number;
    name: string;
    description: string;
    creator: string;
    price: number;
    screen_size: number;
}


export interface ICreatedTelevision {
 data:ITelevision
}

export interface IUpdateTelevision {
    data:ITelevision
   }
   