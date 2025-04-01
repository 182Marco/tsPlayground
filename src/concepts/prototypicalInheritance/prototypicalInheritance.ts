import { IPerson, IStudent, IProf } from './prototypicalInheritance.models';

class Person implements IPerson {
  constructor(public name: string) {}
}

class Student extends Person implements IStudent {
  constructor(
    name: string,
    public institute: string,
  ) {
    super(name);
  }
}

class Prof extends Student implements IProf {
  constructor(
    name: string,
    institute: string,
    public subject: string,
  ) {
    super(name, institute);
  }
}

const person = new Person('Marco');
const student = new Person('T. S. Elliot');
const prof = new Person('Math');

Object.assign(Object.getPrototypeOf(person), { lastName: 'Doe' });

// Now, try to console.log person and,
// student and you will see that with
// prototypical inheritance, they will
// have the same last name of prof.

export { person, student, prof };
