interface Doctor {
  name: string;
  age: string;
  specialities: string[];
}

type IGetAllSpecialitiesInSet = (ar: Doctor[]) => string[];
type IDocNoSpec = Omit<Doctor, 'specialities'>;
type IGetDocArrayNoSpec = (ar: Doctor[]) => IDocNoSpec[];
type IGetSpecialitiesObj = (docs: Doctor[]) => Record<string, IDocNoSpec[]>;

export {
  Doctor,
  IGetAllSpecialitiesInSet,
  IDocNoSpec,
  IGetDocArrayNoSpec,
  IGetSpecialitiesObj,
};
