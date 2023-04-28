export interface IMobile{
    id?: number;
    name: string;
    description: string;
    creator: string;
    price: number;
    screen: string;
}


export interface ICreatedMobile {
 data:IMobile
}

export interface IUpdateMobile {
    data:IMobile
}
   