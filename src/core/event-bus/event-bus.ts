import { Events } from "../events";
import { Listener, Observer } from "../observer";
import { ObserversMap } from "./event-bus.types";

class EventBus {
  private static instance: EventBus;
  private observers: ObserversMap = {};

  static getInstance() {
    if (!this.instance) {
      EventBus.instance = new EventBus();
    }

    return EventBus.instance;
  }

  public publish<EventType extends keyof Events>(
    eventType: EventType,
    event: Events[EventType]
  ) {
    const eventBus = EventBus.getInstance().observers[eventType];

    if (eventBus == undefined) {
      throw new Error("event bus publish error");
    }

    eventBus.publish(event);
  }

  public subscribe<EventType extends keyof Events>(
    eventType: EventType,
    callback: Listener<EventType>
  ) {
    if (!EventBus.getInstance().observers[eventType]) {
      EventBus.getInstance().observers = {
        ...EventBus.getInstance().observers,
        [eventType]: new Observer<EventType>(),
      };
    }

    return EventBus.getInstance().observers[eventType]?.subscribe(callback);
  }
}

export { EventBus };
