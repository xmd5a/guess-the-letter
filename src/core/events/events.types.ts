type EventTypes = "change-letter" | "guessed-letter" | "wrong-letter";

type BaseEvent = {
  id: symbol;
  timestamp: Date;
  type: EventTypes;
};

type ChangeLetterEventPayload = {
  letter: { key: string; code: string };
} & BaseEvent;

type Events = {
  "change-letter": ChangeLetterEventPayload;
  "guessed-letter": BaseEvent;
  "wrong-letter": BaseEvent;
};

export type { BaseEvent, ChangeLetterEventPayload, EventTypes, Events };
