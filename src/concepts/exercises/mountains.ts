interface Mountain {
  name: string;
  heightInMeters: number;
  range: string;
  country: string;
  firstAscentYear: number;
  prominence: number;
  notableClimbers: string[];
  difficulty: string;
  fatalities: number;
  conservationStatus: string;
}

const mountains: Mountain[] = [
  {
    name: 'Mount Everest',
    heightInMeters: 8848,
    range: 'Himalaya',
    country: 'Nepal/China',
    firstAscentYear: 1953,
    prominence: 8848,
    notableClimbers: ['Sir Edmund Hillary', 'Tenzing Norgay'],
    difficulty: 'Technical Climb',
    fatalities: 311,
    conservationStatus: 'Vulnerable',
  },
  {
    name: 'K2',
    heightInMeters: 8611,
    range: 'Karakoram',
    country: 'Pakistan/China',
    firstAscentYear: 1954,
    prominence: 4020,
    notableClimbers: ['Lino Lacedelli', 'Achille Compagnoni'],
    difficulty: 'Very Difficult Climb',
    fatalities: 84,
    conservationStatus: 'Endangered',
  },
  {
    name: 'Kangchenjunga',
    heightInMeters: 8586,
    range: 'Himalaya',
    country: 'Nepal/India',
    firstAscentYear: 1955,
    prominence: 3922,
    notableClimbers: ['George Band', 'Joe Brown'],
    difficulty: 'Very Difficult Climb',
    fatalities: 49,
    conservationStatus: 'Vulnerable',
  },
  {
    name: 'Lhotse',
    heightInMeters: 8516,
    range: 'Himalaya',
    country: 'Nepal/China',
    firstAscentYear: 1956,
    prominence: 610,
    notableClimbers: ['Fritz Luchsinger', 'Ernst Reiss'],
    difficulty: 'Technical Climb',
    fatalities: 20,
    conservationStatus: 'Vulnerable',
  },
  {
    name: 'Makalu',
    heightInMeters: 8485,
    range: 'Himalaya',
    country: 'Nepal/China',
    firstAscentYear: 1955,
    prominence: 2386,
    notableClimbers: ['Jean Franco', 'Lionel Terray'],
    difficulty: 'Very Difficult Climb',
    fatalities: 27,
    conservationStatus: 'Vulnerable',
  },
];

type IAggregate = Record<string, Omit<Mountain, 'name'>>;

type IAggregateMountains = (ar: Mountain[]) => IAggregate;

const aggregateMountains: IAggregateMountains = ar =>
  ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [name]: { ...rest } };
  }, {});

const aggregateMountains2: IAggregateMountains = ar => {
  const aggrgated: IAggregate = {};

  for (const obj of ar) {
    const { name, ...rest } = obj;
    aggrgated[name] = { ...rest };
  }

  return aggrgated;
};

export { aggregateMountains, aggregateMountains2, mountains };
