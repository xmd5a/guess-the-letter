import "./styles.css";

import { ChangeLetterEvent, EventBus, SoundManager } from "./core";
import { KeyboardEventHandler } from "./feature";
import { UIEngine } from "./ui";
import { Config } from "./main.types";
import { PlaySoundEvent } from "./core/events/play-sound-event";

class Engine {
  private _ui: UIEngine;
  private _soundManager: SoundManager;
  private _config: Config = { letters: [] };

  constructor() {
    new KeyboardEventHandler();
    this._ui = new UIEngine();
    this._soundManager = new SoundManager();
    this.load();

    EventBus.getInstance().subscribe("guessed-letter", () => {
      this.init();
    });
    EventBus.getInstance().subscribe("sound-loading-complete", () => {
      this.init();
    });
  }

  private async load() {
    const config = await fetch("./config.json");
    this._config = await config.json();

    this._soundManager.load(
      this._config.letters.map(({ audio: src, id }) => ({ id, src }))
    );
    this._ui.render();
  }

  private generateLetter() {
    return this._config.letters[
      (Math.random() * this._config.letters.length) | 0
    ];
  }

  private init() {
    const letter = this.generateLetter();

    EventBus.getInstance().publish(
      "change-letter",
      new ChangeLetterEvent(letter)
    );
    EventBus.getInstance().publish(
      "play-sound",
      new PlaySoundEvent({ key: letter.id })
    );
  }
}

new Engine();
