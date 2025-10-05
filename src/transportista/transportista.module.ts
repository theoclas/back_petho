import { Module } from '@nestjs/common';
import { TransportistaService } from './transportista.service';
import { TransportistaController } from './transportista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transportista } from './entities/transportista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transportista])],
  controllers: [TransportistaController],
  providers: [TransportistaService],
})
export class TransportistaModule {}
