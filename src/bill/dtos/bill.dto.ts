import { Expose } from "class-transformer";


export class SubDto{
    
    @Expose()
    id: number;

    @Expose()
    total: number;

    @Expose()
    date: Date;
}