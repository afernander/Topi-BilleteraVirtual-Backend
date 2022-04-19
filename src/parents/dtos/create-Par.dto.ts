import { IsString, IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";


export class CreateParDto{
    
    @IsString()
    password: string;

}