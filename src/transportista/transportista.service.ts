import { Injectable } from '@nestjs/common';
import { CreateTransportistaDto } from './dto/create-transportista.dto';
import { UpdateTransportistaDto } from './dto/update-transportista.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Transportista } from './entities/transportista.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransportistaService {
  constructor(
    @InjectRepository(Transportista)
    private readonly transportistaRepository: Repository<Transportista>,
  ) {}
  async create(createTransportistaDto: CreateTransportistaDto) {
    const transportista = await this.transportistaRepository.create(
      createTransportistaDto,
    );
    return this.transportistaRepository.save(transportista);
  }

  async findAll() {
    return await this.transportistaRepository.find();
  }

  async findOne(id_transportista: number) {
    return await this.transportistaRepository.findOneBy({ id_transportista });
  }

  async update(id: number, updateTransportistaDto: UpdateTransportistaDto) {
    return await this.transportistaRepository.update(
      id,
      updateTransportistaDto,
    );
  }

  async remove(id: number) {
    return await this.transportistaRepository.delete(id);
  }
}
