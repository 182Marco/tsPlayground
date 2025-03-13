type Castle = {
  fullName: string;
  location: string;
  yearBuilt: number;
  architect: string;
  style: string;
  rooms: number;
  isHaunted: boolean;
};

export const bavarianCastles: Castle[] = [
  {
    fullName: 'Neuschwanstein Castle',
    location: 'Schwangau',
    yearBuilt: 1869,
    architect: 'Eduard Riedel',
    style: 'Romanesque Revival',
    rooms: 200,
    isHaunted: false,
  },
  {
    fullName: 'Hohenzollern Castle',
    location: 'Hechingen',
    yearBuilt: 1267,
    architect: 'Unknown',
    style: 'Gothic Revival',
    rooms: 140,
    isHaunted: true,
  },
  {
    fullName: 'Linderhof Palace',
    location: 'Ettal',
    yearBuilt: 1878,
    architect: 'Georg Dollmann',
    style: 'Rococo',
    rooms: 70,
    isHaunted: false,
  },
  {
    fullName: 'Herrenchiemsee Palace',
    location: 'Chiemsee',
    yearBuilt: 1886,
    architect: 'Georg Dollmann',
    style: 'Neoclassical',
    rooms: 70,
    isHaunted: true,
  },
  {
    fullName: 'Burg Trausnitz',
    location: 'Landshut',
    yearBuilt: 1204,
    architect: 'Unknown',
    style: 'Gothic',
    rooms: 60,
    isHaunted: false,
  },
];

type IAggregate = Record<string, Omit<Castle, 'fullName'>>;
type IAggregateGetAggregate = (ar: Castle[]) => IAggregate;

export const getAggregatedCastles: IAggregateGetAggregate = ar => {
  const aggregate: IAggregate = {};

  ar.forEach(e => {
    const {fullName, ...rest} = e;
    aggregate[fullName] = {...rest};
  });

  return aggregate;
};

export const getAggregatedCastles2: IAggregateGetAggregate = ar =>
  ar.reduce((a, v) => {
    const {fullName, ...rest} = v;
    return {...a, [fullName]: {...rest}};
  }, {});

export const getAggregatedCastles3: IAggregateGetAggregate = ar => {
  const aggregate: IAggregate = {};

  for (const c of ar) {
    const {fullName, ...rest} = c;
    aggregate[fullName] = {...rest};
  }

  return aggregate;
};

type IGetBackToArray = (a: IAggregate) => Castle[];

export const aggregateCatles = getAggregatedCastles2(bavarianCastles);

export const getBackToCastelsArray: IGetBackToArray = agr =>
  Object.keys(agr).map(k => ({
    fullName: k,
    ...{...agr[k]},
  }));
