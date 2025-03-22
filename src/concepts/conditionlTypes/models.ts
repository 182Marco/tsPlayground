type IAnimal = { name: string };
type Dog = IAnimal & { bark: () => void };
type Cat = IAnimal & { meow: () => void };

type IConditionalDog<T> = T extends Dog ? 'Dog' : 'Not Dog';

type ISpeak = (animal: IAnimal) => void;

type IIsDog = (animal: IAnimal) => animal is Dog;

export { IAnimal, Cat, Dog, ISpeak, IConditionalDog };
