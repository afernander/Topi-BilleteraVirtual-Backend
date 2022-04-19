import { IsString, IsDate, IsNumber } from "class-validator";

export class UpdateSubDto{
    
    @IsString()
    password: string;
}