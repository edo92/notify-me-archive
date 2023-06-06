import { Module } from '@nestjs/common';
import { EventModule } from './event/event.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [EventModule, AlertModule],
})
export class AppModule {}
