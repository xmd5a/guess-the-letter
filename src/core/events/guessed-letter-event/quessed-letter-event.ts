import { BaseEvent } from "../base-event";

class GuessedLetterEvent extends BaseEvent {
  constructor() {
    super("guessed-letter");
  }
}

export { GuessedLetterEvent };
