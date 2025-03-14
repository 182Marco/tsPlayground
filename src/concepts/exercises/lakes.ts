interface Lake {
  name: string;
  areaInSquareKm: number;
  depthInMeters: number;
  volumeInCubicKm: number;
  lengthInKm: number;
  location: string;
  countries: string[];
}

const lakes: Lake[] = [
  {
    name: 'Lake Baikal',
    areaInSquareKm: 31492,
    depthInMeters: 1642,
    volumeInCubicKm: 23615,
    lengthInKm: 636,
    location: 'Russia',
    countries: ['Russia'],
  },
  {
    name: 'Great Bear Lake',
    areaInSquareKm: 31792,
    depthInMeters: 446,
    volumeInCubicKm: 2300,
    lengthInKm: 373,
    location: 'Canada',
    countries: ['Canada'],
  },
  {
    name: 'Lake Victoria',
    areaInSquareKm: 68870,
    depthInMeters: 80,
    volumeInCubicKm: 2760,
    lengthInKm: 337,
    location: 'Kenya/Tanzania/Uganda',
    countries: ['Kenya', 'Tanzania', 'Uganda'],
  },
  {
    name: 'Lake Superior',
    areaInSquareKm: 82103,
    depthInMeters: 406,
    volumeInCubicKm: 2900,
    lengthInKm: 616,
    location: 'United States/Canada',
    countries: ['United States', 'Canada'],
  },
  {
    name: 'Issyk-Kul',
    areaInSquareKm: 6236,
    depthInMeters: 668,
    volumeInCubicKm: 1738,
    lengthInKm: 182,
    location: 'Kyrgyzstan',
    countries: ['Kyrgyzstan'],
  },
];

type IAggregate = Record<string, Omit<Lake, 'name'>>;
type IGetAggregate = (lake: Lake[]) => IAggregate;

const getAggregateLakes: IGetAggregate = ar => {
  const aggregate: IAggregate = {};

  for (const l of ar) {
    const { name, ...rest } = l;
    aggregate[name] = { ...rest };
  }

  return aggregate;
};

const getAggregateLakes2: IGetAggregate = ar =>
  ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [name]: { ...rest } };
  }, {});

export { getAggregateLakes, getAggregateLakes2, lakes };
