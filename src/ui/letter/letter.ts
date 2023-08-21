import { EventBus } from "../../core";
import { BaseUIElement } from "../base-ui-element";
import { Screen } from "../screen";

class Letter extends BaseUIElement {
  private _letter: string = "";

  constructor(screen: Screen) {
    super(screen);

    EventBus.getInstance().subscribe("change-letter", ({ letter: { key } }) => {
      this._letter = key;
    });
  }

  public draw() {
    const fontSize = this.screen.canvas.height / 3;
    this.screen.context.font = `${fontSize}px sans-serif`;
    const {
      actualBoundingBoxAscent,
      actualBoundingBoxLeft,
      actualBoundingBoxRight,
    } = this.screen.context.measureText(this._letter);
    const textWidth = actualBoundingBoxLeft + actualBoundingBoxRight;
    const textHeight = actualBoundingBoxAscent;
    const posX = this.screen.canvas.width / 2 - textWidth / 2;
    const posY = this.screen.canvas.height / 2 + textHeight / 2;

    this.screen.context.fillText(this._letter, posX, posY);
  }
}

export { Letter };
