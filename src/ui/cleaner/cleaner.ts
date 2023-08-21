import { BaseUIElement } from "../base-ui-element";

class Cleaner extends BaseUIElement {
  public draw() {
    this.screen.context.clearRect(
      0,
      0,
      this.screen.canvas.width,
      this.screen.canvas.height
    );
  }
}

export { Cleaner };
