import { Module } from '@nestjs/common';
import { GuiasService } from './guias.service';
import { GuiasController } from './guias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Guia } from './entities/guia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guia])],
  controllers: [GuiasController],
  providers: [GuiasService],
})
export class GuiasModule {}
