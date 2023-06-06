import { Body, Controller, Post } from '@nestjs/common';
import { EventDto, ResponseDto } from './event.dto';
import { EventService } from './event.service';

@Controller('/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post('/message')
  public async eventMessage(@Body('message') body: EventDto): Promise<ResponseDto> {
    return await this.eventService.handleIncomingEvent(body);
  }
}
