import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { EventTypes, MessageTypes } from './event.constants';

class MessageEvent {
  @IsString()
  type: MessageTypes;

  @IsString()
  text: string;

  @IsString()
  user: string;
}

class Authorization {
  @IsString()
  user_id: string;
}

export class EventDto {
  @IsString()
  type: EventTypes;

  @IsString()
  challenge?: string;

  @ValidateNested({ each: true })
  @Type(() => MessageEvent)
  event: MessageEvent;

  @ValidateNested({ each: true })
  @Type(() => Authorization)
  authorizations: Authorization[];
}

export class ResponseDto {
  @IsString()
  challenge?: string;
}
