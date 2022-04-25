import { Expose } from "class-transformer";


export class BillDto{

    @Expose()
    id: number;

    @Expose()
    total: number;

    @Expose()
    date: Date;
}
