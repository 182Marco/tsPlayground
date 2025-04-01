interface IPerson {
  name: string;
}

interface IStudent extends IPerson {
  institute: string;
}

interface IProf extends IStudent {
  subject: string;
}

export { IPerson, IStudent, IProf };
