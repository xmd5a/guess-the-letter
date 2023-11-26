import { SoundLoadingCompleteEvent } from "./sound-loading-complete-event";

type EventTypes =
  | "change-letter"
  | "guessed-letter"
  | "loaded-sound"
  | "play-sound"
  | "sound-loading-complete"
  | "wrong-letter";

type BaseEvent = {
  id: symbol;
  timestamp: Date;
  type: EventTypes;
};

type ChangeLetterEventPayload = {
  letter: { key: string; code: string };
} & BaseEvent;

type PlaySoundEventPayload = {
  audio: { key: string };
} & BaseEvent;

type Events = {
  "change-letter": ChangeLetterEventPayload;
  "guessed-letter": BaseEvent;
  "loaded-sound": BaseEvent;
  "play-sound": PlaySoundEventPayload;
  "sound-loading-complete": SoundLoadingCompleteEvent;
  "wrong-letter": BaseEvent;
};

export type {
  BaseEvent,
  ChangeLetterEventPayload,
  EventTypes,
  Events,
  PlaySoundEventPayload,
};
