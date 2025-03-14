interface IRunner {
  name: string;
  age: number;
  events: string[];
}

type AgrRunners = Record<string, Omit<IRunner, 'name'>>[];
type IGetAgrRunners = (r: IRunner[]) => AgrRunners;

export { AgrRunners, IRunner, IGetAgrRunners };
