import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class loginDto {
  @IsEmail()
  email: string;

  @Transform(({ value }) => value.trim())
  @MinLength(3)
  @MaxLength(15)
  password: string;
}
