import { ICar, IFerrari, ITesla } from '../models/cars';

const car1: IFerrari = { name: '360 modena', getFuel: () => 'petrol' };
const car2: ITesla = { name: '360 modena', getPower: () => 'electric' };

const isFerrari = (car: ICar): car is IFerrari => true;

export { car1 };
