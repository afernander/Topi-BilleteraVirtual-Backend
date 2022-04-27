import { IsString, IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";
import { PartialType } from '@nestjs/swagger';

export class CreateExpDto{
    
    @IsNumber()
    amount: number;

    @IsString()
    category: string;

    users: UserDto;
}

export class UpdateExpDto extends PartialType(CreateExpDto) {}