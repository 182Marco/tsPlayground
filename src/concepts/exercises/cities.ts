interface City {
  name: string;
  country: string;
  population: number;
  area: number;
  density: number;
  landmarks: string[];
  languages: string[];
  climate: string;
  transportation: string[];
  universities: string[];
}

export const cities: City[] = [
  {
    name: 'Tokyo',
    country: 'Japan',
    population: 37977000,
    area: 2187,
    density: 17360,
    landmarks: ['Tokyo Tower', 'Senso-ji', 'Shibuya Crossing'],
    languages: ['Japanese'],
    climate: 'Humid subtropical',
    transportation: ['Tokyo Metro', 'JR East'],
    universities: ['University of Tokyo', 'Waseda University'],
  },
  {
    name: 'Delhi',
    country: 'India',
    population: 30236350,
    area: 1484,
    density: 20370,
    landmarks: ['India Gate', 'Red Fort', 'Qutub Minar'],
    languages: ['Hindi', 'English'],
    climate: 'Semi-arid',
    transportation: ['Delhi Metro', 'Auto rickshaw'],
    universities: ['University of Delhi', 'Jamia Millia Islamia'],
  },
  {
    name: 'Shanghai',
    country: 'China',
    population: 27058479,
    area: 6340,
    density: 4260,
    landmarks: ['The Bund', 'Yu Garden', 'Oriental Pearl Tower'],
    languages: ['Mandarin'],
    climate: 'Humid subtropical',
    transportation: ['Shanghai Metro', 'Maglev Train'],
    universities: ['Fudan University', 'Shanghai Jiao Tong University'],
  },
  {
    name: 'São Paulo',
    country: 'Brazil',
    population: 22043028,
    area: 1521,
    density: 14500,
    landmarks: ['São Paulo Museum of Art', 'Ibirapuera Park', 'Copan Building'],
    languages: ['Portuguese'],
    climate: 'Tropical',
    transportation: ['São Paulo Metro', 'Bus'],
    universities: [
      'University of São Paulo',
      'Federal University of São Paulo',
    ],
  },
  {
    name: 'Mumbai',
    country: 'India',
    population: 23355000,
    area: 603,
    density: 38720,
    landmarks: [
      'Gateway of India',
      'Chhatrapati Shivaji Terminus',
      'Marine Drive',
    ],
    languages: ['Marathi', 'Hindi', 'English'],
    climate: 'Tropical',
    transportation: ['Mumbai Suburban Railway', 'BEST Bus'],
    universities: [
      'University of Mumbai',
      'Indian Institute of Technology Bombay',
    ],
  },
];

type IAggregateCities = (c: City[]) => Record<string, Omit<City, 'name'>>;
export const aggregateCities: IAggregateCities = ar =>
  ar.reduce((a, v) => {
    const {name, ...rest} = v;
    return {...a, name: {...rest}};
  }, {});
