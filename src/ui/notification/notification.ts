import { EventBus } from "../../core";
import { BaseUIElement } from "../base-ui-element";
import { Screen } from "../screen";

class Notification extends BaseUIElement {
  private _color: string = "";
  private _opacity = 0.75;
  private _shouldAnimate = false;

  constructor(screen: Screen) {
    super(screen);

    EventBus.getInstance().subscribe("guessed-letter", () => {
      this._color = "60, 179, 113";
      this.resetAnimationState();
    });
    EventBus.getInstance().subscribe("wrong-letter", () => {
      this._color = "255, 0, 123";
      this.resetAnimationState();
    });
  }

  private resetAnimationState() {
    this._shouldAnimate = true;
    this._opacity = 0.75;
  }

  public draw() {
    if (this._shouldAnimate === false) {
      return;
    }

    this.screen.context.save();

    if (this._opacity > 0) {
      this._opacity -= 0.025;
    }

    this.screen.context.fillStyle = `rgba(${this._color}, ${this._opacity})`;
    this.screen.context.fillRect(
      0,
      0,
      this.screen.canvas.width,
      this.screen.canvas.height
    );
    this.screen.context.restore();

    if (this._opacity < 0) {
      this._shouldAnimate = false;
    }
  }
}

export { Notification };
