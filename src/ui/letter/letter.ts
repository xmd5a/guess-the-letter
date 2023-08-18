import { EventBus } from "../../core/event-bus";
import { Screen } from "../screen";

class Letter {
  private _screen: Screen;

  constructor(screen: Screen) {
    this._screen = screen;
    EventBus.getInstance().subscribe("change-letter", ({ letter }) =>
      this.render(letter)
    );
  }

  render(letter: string) {
    const fontSize = this._screen.canvas.height / 3;
    this._screen.context.font = `${fontSize}px sans-serif`;
    const {
      actualBoundingBoxAscent,
      actualBoundingBoxLeft,
      actualBoundingBoxRight,
    } = this._screen.context.measureText(letter);

    const textWidth = actualBoundingBoxLeft + actualBoundingBoxRight;
    const textHeight = actualBoundingBoxAscent;
    const posX = this._screen.canvas.width / 2 - textWidth / 2;
    const posY = this._screen.canvas.height / 2 + textHeight / 2;
    this._screen.context.fillText(letter, posX, posY);
  }
}

export { Letter };
