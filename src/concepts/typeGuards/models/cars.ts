type ICar = { name: string };
type IFerrari = ICar & { getFuel: () => string };
type ITesla = ICar & { getPower: () => string };

export { ICar, IFerrari, ITesla };
