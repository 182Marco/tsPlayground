export interface IRunner {
  name: string;
  age: number;
  events: string[];
}

export type AgrRunners = Record<string, Omit<IRunner, 'name'>>[];
export type IGetAgrRunners = (r: IRunner[]) => AgrRunners;
