import { Guia } from 'src/guias/entities/guia.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Transportista {
  @PrimaryGeneratedColumn()
  id_transportista: number;

  @Column()
  nombre: string;

  @Column()
  contacto: string;

  @Column()
  telefono: string;

  @Column()
  url_tracking: string;

  @OneToMany(() => Guia, (guia) => guia.transportista)
  guias: Guia[];
}
