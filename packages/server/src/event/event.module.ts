import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { AlertService } from '../alert/alert.service';

@Module({
  providers: [EventService, AlertService],
  exports: [EventService, AlertService],
})
export class EventModule {}
