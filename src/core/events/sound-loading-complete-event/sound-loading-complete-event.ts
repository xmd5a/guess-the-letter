import { BaseEvent } from "../base-event";

class SoundLoadingCompleteEvent extends BaseEvent {
  constructor() {
    super("sound-loading-complete");
  }
}

export { SoundLoadingCompleteEvent };
