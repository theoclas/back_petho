import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTransportistaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  contacto: string;

  @IsString()
  telefono: string;

  @IsString()
  url_tracking: string;
}
