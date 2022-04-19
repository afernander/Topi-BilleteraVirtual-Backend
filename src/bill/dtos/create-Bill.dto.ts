import { IsString, IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";
import { ProDto } from "src/products/dtos/pro.dto";


export class CreateBillDto{
    
    @IsNumber()
    total: number;

    @IsDate()
    date: Date;

    users: UserDto;

    products: ProDto;
}