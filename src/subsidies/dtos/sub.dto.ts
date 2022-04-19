import { Expose } from "class-transformer";
import { IsString, IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";


export class SubDto{
    
    @Expose()
    id: number;

    @Expose()
    amount: number;

    @Expose()
    date: Date;
}