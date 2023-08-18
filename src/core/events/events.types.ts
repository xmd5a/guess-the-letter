type EventTypes = "change-letter";

type BaseEvent = {
  id: symbol;
  timestamp: Date;
  type: EventTypes;
};

type ChangeLetterEventPayload = {
  letter: string;
} & BaseEvent;

export type { ChangeLetterEventPayload };

type Events = {
  "change-letter": ChangeLetterEventPayload;
};

export type { BaseEvent, EventTypes, Events };
