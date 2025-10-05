import { Controller, Post, Param } from '@nestjs/common';
import { TrackingService } from './tracking.service'; // ajusta la ruta según tu estructura

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post(':idGuia')
  async consultarEstado(@Param('idGuia') idGuia: string) {
    return this.trackingService.consultarEstado(idGuia);
  }
}
