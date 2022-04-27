import { IsString, IsDate, IsNumber } from 'class-validator';
import { UserDto } from 'src/users/dtos/user.dto';
import { ProductDto } from 'src/products/dtos/product.dto';
import { PartialType } from '@nestjs/swagger';

export class CreateBillDto {
  @IsNumber()
  total: number;

  @IsDate()
  date: Date;

  users: UserDto;

  products: ProductDto;
}

export class UpdateBillDto extends PartialType(CreateBillDto) {}
