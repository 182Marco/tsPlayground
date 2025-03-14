// Typing for pyramid objects
interface Pyramid {
  name: string;
  location: string;
  coordinates: { latitude: number; longitude: number };
  height: number;
}

// Array of pyramid objects
const pyramids: Pyramid[] = [
  {
    name: 'Great Pyramid of Giza',
    location: 'Giza, Egypt',
    coordinates: { latitude: 29.9792, longitude: 31.1342 },
    height: 146.6,
  },
  {
    name: 'Pyramid of Khafre',
    location: 'Giza, Egypt',
    coordinates: { latitude: 29.9754, longitude: 31.1294 },
    height: 136.4,
  },
  {
    name: 'Pyramid of Menkaure',
    location: 'Giza, Egypt',
    coordinates: { latitude: 29.974, longitude: 31.1287 },
    height: 65,
  },
  {
    name: 'Red Pyramid',
    location: 'Dahshur, Egypt',
    coordinates: { latitude: 29.7935, longitude: 31.1858 },
    height: 104,
  },
  {
    name: 'Bent Pyramid',
    location: 'Dahshur, Egypt',
    coordinates: { latitude: 29.7938, longitude: 31.2209 },
    height: 101.1,
  },
];

// Exercise: Write a function that reduces the array of pyramids into an object
// where the key is the name of the pyramid and the value is an object with location, coordinates, and height.

// Now, try writing the function yourself.

type IAggregate = Record<string, Omit<Pyramid, 'name'>>;
type IGetAggregate = (p: Pyramid[]) => IAggregate;

const getAggregatePiramids: IGetAggregate = ar =>
  ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [name]: { ...rest } };
  }, {});

export { getAggregatePiramids, pyramids };
