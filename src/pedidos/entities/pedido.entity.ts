import { Cliente } from 'src/clientes/entities/cliente.entity';
// import { Estado } from 'src/estados/entities/estado.entity';
import { Guia } from 'src/guias/entities/guia.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id_pedido: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  cliente: Cliente;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_actualizacion: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto_total: number;

  @OneToMany(() => Guia, (guia) => guia.pedido)
  guias: Guia[];
}
