import { PartialType } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber } from 'class-validator';
import { UserDto } from 'src/users/dtos/user.dto';

export class CreateParentsDto {
  @IsString()
  password: string;
}

export class UpdateParentsDto extends PartialType(CreateParentsDto) {}
