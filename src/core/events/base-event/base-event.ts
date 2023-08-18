import { EventTypes } from "../events.types";

class BaseEvent {
  public id: symbol;
  public timestamp: Date;

  constructor(public type: EventTypes) {
    this.id = Symbol(type);
    this.timestamp = new Date();
  }
}

export { BaseEvent };
