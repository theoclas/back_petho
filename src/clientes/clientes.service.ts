import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly ClienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const Cliente = this.ClienteRepository.create(createClienteDto);
    return this.ClienteRepository.save(Cliente);
  }

  async findAll() {
    return await this.ClienteRepository.find();
  }

  async findOne(id_cliente: number) {
    return await this.ClienteRepository.findOneBy({ id_cliente });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    return await this.ClienteRepository.update(id, updateClienteDto);
  }

  async remove(id: number) {
    return this.ClienteRepository.delete(id);
  }
}
