type Config = {
  letters: ReadonlyArray<{
    audio: string;
    id: string;
    key: string;
    code: string;
  }>;
};

export type { Config };
