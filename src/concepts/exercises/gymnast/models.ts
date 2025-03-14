interface Gymnast {
  name: string;
  age: string;
  specialties: string[];
}

type IGymnastsNoSpec = Omit<Gymnast, 'name'>;
type IAgrAr = Record<string, IGymnastsNoSpec>[];
type IGetAgrGymnasts = (g: Gymnast[]) => IAgrAr;

export { Gymnast, IGymnastsNoSpec, IAgrAr, IGetAgrGymnasts };
