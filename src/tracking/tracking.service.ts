import { Injectable } from '@nestjs/common';
import { ConsultarGuia } from '../Consumo/Interrapidisimo';

@Injectable()
export class TrackingService {
  async consultarEstado(idGuia: string): Promise<{ estado: string }> {
    return await ConsultarGuia(idGuia);
  }
}
