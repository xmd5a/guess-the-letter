import { Screen } from "../screen";

abstract class BaseUIElement {
  private _screen;

  constructor(screen: Screen) {
    this._screen = screen;
  }

  protected get screen() {
    return this._screen;
  }

  public abstract draw(): void;
}

export { BaseUIElement };
