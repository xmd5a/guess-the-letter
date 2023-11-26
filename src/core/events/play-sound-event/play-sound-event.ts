import { BaseEvent } from "../base-event";
import { PlaySoundEventPayload } from "../events.types";

class PlaySoundEvent extends BaseEvent implements PlaySoundEventPayload {
  constructor(public audio: { key: string }) {
    super("play-sound");
  }
}

export { PlaySoundEvent };
