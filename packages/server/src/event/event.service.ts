import { Injectable } from '@nestjs/common';
import { EventTypes } from './event.constants';
import { EventDto, ResponseDto } from './event.dto';

@Injectable()
export class EventService {
  public async handleIncomingEvent(body: EventDto): Promise<ResponseDto> {
    if (body.type === EventTypes.VERIFY) {
      return { challenge: body.challenge };
    }
    this.handleEventMessage(body);
  }

  private handleEventMessage(body: EventDto): void {
    //
  }
}
