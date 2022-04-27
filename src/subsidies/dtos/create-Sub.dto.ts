import { IsString, IsDate, IsNumber } from "class-validator";
import { UserDto } from "src/users/dtos/user.dto";
import { PartialType } from '@nestjs/swagger';

export class CreateSubDto{
    
    @IsNumber()
    amount: number;

    @IsDate()
    date: Date;

    users: UserDto;
}

export class UpdateSubDto extends PartialType(CreateSubDto) {}