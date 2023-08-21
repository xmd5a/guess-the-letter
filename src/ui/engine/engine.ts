import { BaseUIElement, Cleaner, Letter, Notification, Screen } from "../";

class UIEngine {
  private _uiElements: Array<BaseUIElement> = [];

  constructor() {
    const screen = new Screen();
    const cleaner = new Cleaner(screen);
    const notification = new Notification(screen);
    const letter = new Letter(screen);

    this._uiElements.push(cleaner);
    this._uiElements.push(notification);
    this._uiElements.push(letter);
  }

  public render() {
    setInterval(() => {
      this._uiElements.forEach((uiElement) => {
        uiElement.draw();
      });
    }, 1000 / 60);
  }
}

export { UIEngine };
