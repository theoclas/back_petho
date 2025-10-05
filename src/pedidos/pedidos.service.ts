import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto) {
    const pedido = await this.pedidoRepository.create(createPedidoDto);
    return this.pedidoRepository.save(pedido);
  }

  async findAll() {
    return await this.pedidoRepository.find();
  }

  // async findOne(id_pedido: number) {
  //   return await this.pedidoRepository.findOneBy({ id_pedido });
  // }

  async findOne(id_pedido: number) {
    return await this.pedidoRepository.findOne({
      where: { id_pedido },
      relations: ['cliente', 'estado_actual', 'guias', 'historial_estados'],
    });
  }
  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return await this.pedidoRepository.update(id, updatePedidoDto);
  }

  async remove(id: number) {
    return await this.pedidoRepository.delete(id);
  }
}
