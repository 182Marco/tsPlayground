export interface ISwimmer {
  name: string;
  age: string;
  events: string[];
}

export type IGetBySecialities = (
  s: ISwimmer[],
) => Record<string, Omit<ISwimmer, 'events'>[]>;
