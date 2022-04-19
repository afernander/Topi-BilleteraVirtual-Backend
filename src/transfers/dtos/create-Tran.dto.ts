import { IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";


export class CreateTranDto{
    
    @IsNumber()
    amount: number;

    @IsNumber()
    user_dest_id: number;

    @IsDate()
    date: Date;

    users: UserDto;
}