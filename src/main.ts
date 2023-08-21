import "./styles.css";

import { ChangeLetterEvent, EventBus } from "./core";
import { KeyboardEventHandler } from "./feature";
import { UIEngine } from "./ui";

class Engine {
  private ui: UIEngine;

  constructor() {
    new KeyboardEventHandler();

    this.ui = new UIEngine();
    this.ui.render();
    EventBus.getInstance().subscribe("guessed-letter", () => this.init());
  }

  private generateLetter() {
    const alphabet = [
      { key: "A", code: "KeyA" },
      { key: "B", code: "KeyB" },
      { key: "C", code: "KeyC" },
      { key: "D", code: "KeyD" },
      { key: "E", code: "KeyE" },
      { key: "F", code: "KeyF" },
      { key: "G", code: "KeyG" },
      { key: "H", code: "KeyH" },
      { key: "I", code: "KeyI" },
      { key: "J", code: "KeyJ" },
      { key: "K", code: "KeyK" },
      { key: "L", code: "KeyL" },
      { key: "M", code: "KeyM" },
      { key: "N", code: "KeyN" },
      { key: "O", code: "KeyO" },
      { key: "P", code: "KeyP" },
      { key: "Q", code: "KeyQ" },
      { key: "R", code: "KeyR" },
      { key: "S", code: "KeyS" },
      { key: "T", code: "KeyT" },
      { key: "U", code: "KeyU" },
      { key: "V", code: "KeyV" },
      { key: "W", code: "KeyW" },
      { key: "X", code: "KeyX" },
      { key: "Y", code: "KeyY" },
      { key: "Z", code: "KeyZ" },
    ];

    return alphabet[(Math.random() * alphabet.length) | 0];
  }

  public init() {
    EventBus.getInstance().publish(
      "change-letter",
      new ChangeLetterEvent(this.generateLetter())
    );
  }
}

const game = new Engine();
game.init();
