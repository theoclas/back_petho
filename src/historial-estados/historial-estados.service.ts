import { Injectable } from '@nestjs/common';
import { CreateHistorialEstadoDto } from './dto/create-historial-estado.dto';
import { UpdateHistorialEstadoDto } from './dto/update-historial-estado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HistorialEstado } from './entities/historial-estado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HistorialEstadosService {
  constructor(
    @InjectRepository(HistorialEstado)
    private readonly historialEstadoRepository: Repository<HistorialEstado>,
  ) {}
  async create(createHistorialEstadoDto: CreateHistorialEstadoDto) {
    const historialestado = await this.historialEstadoRepository.create(
      createHistorialEstadoDto,
    );
    return this.historialEstadoRepository.save(historialestado);
  }

  async findAll() {
    return await this.historialEstadoRepository.find();
  }

  async findOne(id_historial: number) {
    return await this.historialEstadoRepository.findOneBy({ id_historial });
  }

  async update(id: number, updateHistorialEstadoDto: UpdateHistorialEstadoDto) {
    return await this.historialEstadoRepository.update(
      id,
      updateHistorialEstadoDto,
    );
  }

  async remove(id: number) {
    return await this.historialEstadoRepository.delete(id);
  }
}
