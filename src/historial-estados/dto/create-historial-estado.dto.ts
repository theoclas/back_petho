import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateHistorialEstadoDto {
  @IsNumber()
  id_pedido: number;

  @IsString()
  estado: string;

  @IsOptional()
  @IsString()
  observaciones?: string;
}
