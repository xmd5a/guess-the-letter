import { BaseEvent } from "../base-event";

class WrongLetterEvent extends BaseEvent {
  constructor() {
    super("wrong-letter");
  }
}

export { WrongLetterEvent };
