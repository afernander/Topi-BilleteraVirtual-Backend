import { IsString, IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";


export class UpdateSubDto{
    
    @IsNumber()
    amount: number;

    @IsDate()
    date: Date;

    users: UserDto;
}