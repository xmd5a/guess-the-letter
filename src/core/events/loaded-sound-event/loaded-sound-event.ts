import { BaseEvent } from "../base-event";

class LoadedSoundEvent extends BaseEvent {
  constructor() {
    super("loaded-sound");
  }
}

export { LoadedSoundEvent };
