import { IsAlphanumeric, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsAlphanumeric()
  password: string;
}
