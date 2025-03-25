type IAnimal = { name: string };
type Dog = IAnimal & { bark: () => void };
type Cat = IAnimal & { meow: () => void };

export { IAnimal, Cat, Dog };
