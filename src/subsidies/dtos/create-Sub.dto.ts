import { IsString, IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";


export class CreateSubDto{
    
    @IsNumber()
    amount: number;

    @IsDate()
    date: Date;

    users: UserDto;
}