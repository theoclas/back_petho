import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePedidoDto {
  @IsNumber()
  id_cliente: number;

  @IsNumber()
  monto_total: number;

  @IsString()
  moneda: string;

  @IsOptional()
  id_estado?: number;
}
