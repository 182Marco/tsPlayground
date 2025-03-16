import { IPerson } from './models';

// ❌ This arrow function will cause an error in TypeScript
// because arrow functions do not have their own `this` binding.
// The `this` parameter in an arrow function is ignored.
// const greet1 = (this: IPerson) => `Hey, I'm ${this.name}`;

function greet(this: IPerson, action: string, way: string) {
  return `Hey, I'm ${this.firstName}, I'd like to ${action}, in a very ${way} way`;
}

export { greet };
