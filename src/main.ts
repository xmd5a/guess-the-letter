import { ChangeLetterEvent, EventBus } from "./core";
import "./styles.css";

import { Letter, Screen } from "./ui";

class Engine {
  constructor() {
    const screen = new Screen();
    const letter = new Letter(screen);
  }

  init() {
    EventBus.getInstance().publish("change-letter", new ChangeLetterEvent("L"));
  }
}

const game = new Engine();
game.init();
