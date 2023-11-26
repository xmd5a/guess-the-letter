import { EventBus } from "../../event-bus";
import { LoadedSoundEvent } from "../../events";

class Sound {
  private _file: HTMLAudioElement;
  private _isLoaded: boolean;
  private _src: string;
  private preloadFunction: () => void;

  constructor(src: string) {
    this._src = src;
    this._isLoaded = false;

    this.preloadFunction = this.preloadFile.bind(this);
    this._file = new Audio(this._src);
    this._file.addEventListener("canplaythrough", this.preloadFunction);
  }

  private preloadFile() {
    this._isLoaded = true;
    this._file.removeEventListener("canplaythrough", this.preloadFunction);
    EventBus.getInstance().publish("loaded-sound", new LoadedSoundEvent());
  }

  public get file() {
    return this._file;
  }

  public get isLoading() {
    return this._isLoaded;
  }
}

export { Sound };
