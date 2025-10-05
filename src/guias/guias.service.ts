import { Injectable } from '@nestjs/common';
import { CreateGuiaDto } from './dto/create-guia.dto';
import { UpdateGuiaDto } from './dto/update-guia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guia } from './entities/guia.entity';

@Injectable()
export class GuiasService {
  constructor(
    @InjectRepository(Guia)
    private guiaRepository: Repository<Guia>,
  ) {}

  async create(createGuiaDto: CreateGuiaDto) {
    const guia = await this.guiaRepository.create(createGuiaDto);
    return this.guiaRepository.save(guia);
  }

  async findAll() {
    return await this.guiaRepository.find();
  }

  async findOne(id_guia: number) {
    return await this.guiaRepository.findOneBy({ id_guia });
  }

  async update(id: number, updateGuiaDto: UpdateGuiaDto) {
    return await this.guiaRepository.update(id, updateGuiaDto);
  }

  async remove(id: number) {
    return await this.guiaRepository.delete(id);
  }
}
