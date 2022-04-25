import { IsEmail, IsString, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly name: string;

  @IsDate()
  readonly date: Date;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
