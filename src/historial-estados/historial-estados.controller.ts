import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HistorialEstadosService } from './historial-estados.service';
import { CreateHistorialEstadoDto } from './dto/create-historial-estado.dto';
import { UpdateHistorialEstadoDto } from './dto/update-historial-estado.dto';

@Controller('historial-estados')
export class HistorialEstadosController {
  constructor(
    private readonly historialEstadosService: HistorialEstadosService,
  ) {}

  @Post()
  create(@Body() createHistorialEstadoDto: CreateHistorialEstadoDto) {
    return this.historialEstadosService.create(createHistorialEstadoDto);
  }

  @Get()
  findAll() {
    return this.historialEstadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historialEstadosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHistorialEstadoDto: UpdateHistorialEstadoDto,
  ) {
    return this.historialEstadosService.update(+id, updateHistorialEstadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historialEstadosService.remove(+id);
  }
}
