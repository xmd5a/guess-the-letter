import { Events } from "../events";
import { Observable, Listener } from "./observer.types";

class Observer<EventType extends keyof Events>
  implements Observable<EventType>
{
  private listeners: Map<Symbol, Listener<EventType>> = new Map();

  subscribe(listener: Listener<EventType>): () => void {
    const listenerIdentity = Symbol();
    this.listeners.set(listenerIdentity, listener);

    return () => {
      this.listeners.delete(listenerIdentity);
    };
  }

  publish(event: Events[EventType]): void {
    this.listeners.forEach((listener) => listener(event));
  }
}

export { Observer };
export type { Listener, Observable };
