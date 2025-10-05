import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
} from 'typeorm';
import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Transportista } from 'src/transportista/entities/transportista.entity';
import { HistorialEstado } from 'src/historial-estados/entities/historial-estado.entity';

@Entity()
export class Guia {
  @PrimaryGeneratedColumn()
  id_guia: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.guias)
  pedido: Pedido;

  @ManyToOne(() => Transportista, (transportista) => transportista.guias)
  transportista: Transportista;

  @Column({ unique: true })
  numero_guia: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_asignacion: Date;

  @OneToMany(() => HistorialEstado, (historial) => historial.guia)
  historial_estados: HistorialEstado[];
}
