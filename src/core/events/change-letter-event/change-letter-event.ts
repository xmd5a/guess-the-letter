import { BaseEvent } from "../base-event";
import { ChangeLetterEventPayload } from "../events.types";

class ChangeLetterEvent extends BaseEvent implements ChangeLetterEventPayload {
  constructor(public letter: { key: string; code: string }) {
    super("change-letter");
  }
}

export { ChangeLetterEvent };
