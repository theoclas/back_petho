import { Module } from '@nestjs/common';
import { HistorialEstadosService } from './historial-estados.service';
import { HistorialEstadosController } from './historial-estados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialEstado } from './entities/historial-estado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialEstado])],
  controllers: [HistorialEstadosController],
  providers: [HistorialEstadosService],
})
export class HistorialEstadosModule {}
