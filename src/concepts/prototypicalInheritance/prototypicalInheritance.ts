import { IPerson, IStudent, IProf } from './prototypicalInheritance.models';

const marco: IPerson = {
  name: 'Marco',
};

const bil: IStudent = {
  name: 'Bil',
  institute: 'T. S. Eliot',
};

const al: IProf = {
  name: 'Al',
  institute: 'T. S. Eliot',
  subject: 'Math',
};

Object.assign(Object.getPrototypeOf(al), { lastName: 'Doe' });

// Now, try to console.log Bill and Marco,
// and you will see that with prototypical
// inheritance, they will have the same last name.

export { marco, bil };
