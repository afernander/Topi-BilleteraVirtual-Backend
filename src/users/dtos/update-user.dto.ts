import { IsEmail, IsString, IsDate } from "class-validator";

export class UpdateUserDto{
    @IsEmail()
    email: string;
    
    @IsString()
    password: string;

    @IsString()
    name: string;

    @IsDate()
    date: Date;
}