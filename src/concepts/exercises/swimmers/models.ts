interface ISwimmer {
  name: string;
  age: string;
  events: string[];
}

type IGetBySecialities = (
  s: ISwimmer[],
) => Record<string, Omit<ISwimmer, 'events'>[]>;

export { IGetBySecialities, ISwimmer };
