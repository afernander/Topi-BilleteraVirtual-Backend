import { IsEmail, IsString } from 'class-validator';


export class SinginDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

}
