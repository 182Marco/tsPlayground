import { IAnimal, Dog, Cat } from '../models';

const isDog = (animal: IAnimal): animal is Dog => 'bark' in animal;

const myDog: Dog = { name: 'Buddy', bark: () => console.log('Woof!') };
const myCat: Cat = { name: 'Whiskers', meow: () => console.log('Meow!') };

export { myCat, myDog, isDog };
