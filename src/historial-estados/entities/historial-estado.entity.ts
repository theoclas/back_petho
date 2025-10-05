import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Guia } from 'src/guias/entities/guia.entity';

@Entity()
export class HistorialEstado {
  @PrimaryGeneratedColumn()
  id_historial: number;

  @ManyToOne(() => Guia, (guia) => guia.historial_estados, {
    onDelete: 'CASCADE',
  })
  guia: Guia;

  @Column()
  estado: string;

  // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // fecha_cambio: Date;

  // @Column({ nullable: true })
  // observaciones: string;
}
