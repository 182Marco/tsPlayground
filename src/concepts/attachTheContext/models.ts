interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}

type IGreet = (this: IPerson, action: string, way: string) => string;
type ICallWithAContext = () => string[];
type IReatachFnToContext = () => string;
type IReatachFnToContextCurring = () => () => string;

export {
  IPerson,
  IGreet,
  ICallWithAContext,
  IReatachFnToContext,
  IReatachFnToContextCurring,
};
