export interface ISouthParkCharacter {
  name: string;
  role: string[];
  traits: string[];
}

export type IAgregated = Record<string, Omit<ISouthParkCharacter, 'role'>[]>;
export type IGetAgregated = (c: ISouthParkCharacter[]) => IAgregated;
