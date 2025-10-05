import { IsNumber, IsString } from 'class-validator';

export class CreateGuiaDto {
  @IsNumber()
  id_pedido: number;

  @IsNumber()
  id_transportista: number;

  @IsString()
  numero_guia: string;
}
