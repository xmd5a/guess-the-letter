import { Events } from "../events";
import { Observable } from "../observer";

type ObserversMap = {
  [EventType in keyof Events]?: Observable<EventType>;
};

export type { ObserversMap };
