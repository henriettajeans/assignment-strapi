export interface IAudio{
    id?: number;
    name: string;
    description: string;
    creator: string;
    price:number;
    screen: string;
}


export interface ICreatedAudio {
 data:IAudio
}

export interface IUpdateAudio {
    data:IAudio
   }
   