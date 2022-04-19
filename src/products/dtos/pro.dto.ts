import { Expose } from "class-transformer";


export class ProDto{
    
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    price: number;

    @Expose()
    description: string;
}