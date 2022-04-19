import { Expose } from "class-transformer";


export class TranDto{
    
    @Expose()
    id: number;

    @Expose()
    user_dest_id: number;

    @Expose()
    amount: number;

    @Expose()
    date: Date;
}