import { IsString, IsDate, IsNumber } from "class-validator";

export class UpdateProDto{
   
    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsString()
    description: string;
}