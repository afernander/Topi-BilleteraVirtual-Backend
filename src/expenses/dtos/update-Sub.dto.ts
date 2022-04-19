import { IsString, IsDate, IsNumber } from "class-validator";

export class UpdateSubDto{
    
    @IsNumber()
    amount: number;

    @IsString()
    category: string;

}