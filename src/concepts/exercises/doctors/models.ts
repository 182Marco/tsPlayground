export interface Doctor {
  name: string;
  age: string;
  specialities: string[];
}

export type IGetAllSpecialitiesInSet = (ar: Doctor[]) => string[];
export type IDocNoSpec = Omit<Doctor, 'specialities'>;
export type IGetDocArrayNoSpec = (ar: Doctor[]) => IDocNoSpec[];
export type IGetSpecialitiesObj = (
  docs: Doctor[],
) => Record<string, IDocNoSpec[]>;
