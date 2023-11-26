import { EventBus, GuessedLetterEvent, WrongLetterEvent } from "../../core";

class KeyboardEventHandler {
  private _letter: { key: string; code: string } = { key: "", code: "" };
  private handlerFunction: (event: KeyboardEvent) => void = () => null;

  constructor() {
    EventBus.getInstance().subscribe("change-letter", ({ letter }) => {
      this._letter = letter;

      this.handlerFunction = this.handleEvent.bind(this);
      this.addEventHandler();
    });
    EventBus.getInstance().subscribe("guessed-letter", () =>
      this.removeEventHandler()
    );
  }

  handleEvent(event: KeyboardEvent) {
    if (event.repeat) {
      return;
    }

    if (event.code !== this._letter.code) {
      EventBus.getInstance().publish("wrong-letter", new WrongLetterEvent());
      return;
    }

    EventBus.getInstance().publish("guessed-letter", new GuessedLetterEvent());
  }

  addEventHandler() {
    window.addEventListener("keydown", this.handlerFunction);
  }

  removeEventHandler() {
    window.removeEventListener("keydown", this.handlerFunction);
  }
}

export { KeyboardEventHandler };
