import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  email: string;

  @IsString()
  telefono: string;

  @IsString()
  direccion: string;

  @IsString()
  ciudad: string;

  @IsString()
  pais: string;
}
