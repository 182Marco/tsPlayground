export interface Gymnast {
  name: string;
  age: string;
  specialties: string[];
}

export type IGymnastsNoSpec = Omit<Gymnast, 'name'>;
export type IAgrAr = Record<string, IGymnastsNoSpec>[];
export type IGetAgrGymnasts = (g: Gymnast[]) => IAgrAr;
