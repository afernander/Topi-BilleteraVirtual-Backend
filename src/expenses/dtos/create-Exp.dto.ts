import { IsString, IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";


export class CreateExpDto{
    
    @IsNumber()
    amount: number;

    @IsString()
    category: string;

    users: UserDto;
}