type EventTypes = "change-letter" | "guessed-letter";

type BaseEvent = {
  id: symbol;
  timestamp: Date;
  type: EventTypes;
};

type ChangeLetterEventPayload = {
  letter: { key: string; code: string };
} & BaseEvent;

export type { ChangeLetterEventPayload };

type Events = {
  "change-letter": ChangeLetterEventPayload;
  "guessed-letter": BaseEvent;
};

export type { BaseEvent, EventTypes, Events };
