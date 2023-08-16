import { Events } from "../events";

type Listener<EventType extends keyof Events> = (e: Events[EventType]) => void;

type Observable<EventType extends keyof Events> = {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: Events[EventType]) => void;
};

export type { Listener, Observable };
