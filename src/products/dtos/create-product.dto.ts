import { IsString, IsDate, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;

  @IsString()
  readonly description: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
