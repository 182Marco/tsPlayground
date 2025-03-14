interface ISouthParkCharacter {
  name: string;
  role: string[];
  traits: string[];
}

type IAgregated = Record<string, Omit<ISouthParkCharacter, 'role'>[]>;
type IGetAgregated = (c: ISouthParkCharacter[]) => IAgregated;

export { IAgregated, IGetAgregated, ISouthParkCharacter };
