import {
  IGreet,
  ICallWithAContext,
  IReatachFnToContext,
  IReatachFnToContextCurring,
} from './models';
import { people } from './pepoleObjs';

// ❌ This arrow function will cause an error in TypeScript
// because arrow functions do not have their own `this` binding.
// The `this` parameter in an arrow function is ignored.
// const greet1 = (this: IPerson) => `Hey, I'm ${this.name}`;

const greet: IGreet = function (this, action, way) {
  return `Hey, I'm ${this.firstName}, I'd like to ${action}, in a very ${way} way.`;
};

const person = {
  name: 'Marco',
  greet() {
    return `Hay, I'm ${this.name}`;
  },
};

const greetAllwithCall: ICallWithAContext = () =>
  people.map(p => greet.call(p, 'fuck', 'raw'));

const greetAllwithApply: ICallWithAContext = () =>
  people.map(p => greet.apply(p, ['fuck', 'raw']));

const greetWithBind: IReatachFnToContext = () => person.greet.bind(person)();

const greetWithBindCurring: IReatachFnToContextCurring = () =>
  person.greet.bind(person); // example of Type with currring

export {
  greetAllwithCall,
  greetAllwithApply,
  greetWithBind,
  greetWithBindCurring,
};
