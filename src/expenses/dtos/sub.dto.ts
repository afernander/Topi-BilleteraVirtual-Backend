import { Expose } from "class-transformer";

export class SubDto{
    
    @Expose()
    id: number;

    @Expose()
    amount: number;

    @Expose()
    categoty: string;
}