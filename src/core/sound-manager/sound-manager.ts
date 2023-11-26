import { EventBus } from "../event-bus";
import { SoundLoadingCompleteEvent } from "../events";
import { Sound } from "./sound";

class SoundManager {
  private _files: Map<string, Sound> = new Map();

  constructor() {
    EventBus.getInstance().subscribe("play-sound", ({ audio: { key } }) => {
      this.playAudio(key);
    });
    EventBus.getInstance().subscribe("loaded-sound", () => {
      this.areAllFilesLoaded();
    });
  }

  public load(files: ReadonlyArray<{ id: string; src: string }>) {
    files.forEach(({ id, src }) => {
      this._files.set(id, new Sound(src));
    });
  }

  private areAllFilesLoaded() {
    let loadedFiles = 0;

    this._files.forEach((file) => {
      if (file.isLoading === false) {
        return;
      }

      loadedFiles++;
    });

    if (loadedFiles !== this._files.size) {
      return;
    }

    EventBus.getInstance().publish(
      "sound-loading-complete",
      new SoundLoadingCompleteEvent()
    );
  }

  private playAudio(key: string) {
    this._files.get(key)?.file.play();
  }
}

export { SoundManager };
