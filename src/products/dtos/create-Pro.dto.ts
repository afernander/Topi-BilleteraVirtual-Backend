import { IsString, IsDate, IsNumber } from "class-validator";

export class CreateProDto{
    
    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    description: string;
}