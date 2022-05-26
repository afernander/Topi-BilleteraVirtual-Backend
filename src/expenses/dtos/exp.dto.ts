import { Expose } from "class-transformer";

export class ExpDto{
    
    @Expose()
    id: number;

    @Expose()
    amount: number;

    @Expose()
    category: string;
}