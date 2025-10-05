import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosModule } from './pedidos/pedidos.module';
import { ClientesModule } from './clientes/clientes.module';
import { Cliente } from './clientes/entities/cliente.entity';
import { Pedido } from './pedidos/entities/pedido.entity';
import { TransportistaModule } from './transportista/transportista.module';
import { GuiasModule } from './guias/guias.module';
// import { EstadosModule } from './estados/estados.module';
import { HistorialEstadosModule } from './historial-estados/historial-estados.module';
// import { Estado } from './estados/entities/estado.entity';
import { Guia } from './guias/entities/guia.entity';
import { HistorialEstado } from './historial-estados/entities/historial-estado.entity';
import { Transportista } from './transportista/entities/transportista.entity';
import { TrackingModule } from './tracking/tracking.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1026161053',
      database: 'Petho',
      entities: [Cliente, Pedido, Guia, HistorialEstado, Transportista, User],
      synchronize: true,
    }),
    PedidosModule,
    ClientesModule,
    TransportistaModule,
    GuiasModule,
    HistorialEstadosModule,
    TrackingModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
