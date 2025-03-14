interface ITree {
  name: string;
  type: string;
  height: number; // in meters
  trunkDiameter: number; // in meters
  age: number; // in years
  fruit: boolean;
  region: string;
}

const trees: ITree[] = [
  {
    name: 'Oak',
    type: 'Deciduous',
    height: 25, // in meters
    trunkDiameter: 1.5, // in meters
    age: 100, // in years
    fruit: false,
    region: 'Europe',
  },
  {
    name: 'Sequoia',
    type: 'Evergreen',
    height: 80, // in meters
    trunkDiameter: 7, // in meters
    age: 1200, // in years
    fruit: false,
    region: 'North America',
  },
  {
    name: 'Cedar of Lebanon',
    type: 'Evergreen',
    height: 40, // in meters
    trunkDiameter: 2.5, // in meters
    age: 300, // in years
    fruit: true,
    region: 'Middle East',
  },
  {
    name: 'Maple',
    type: 'Deciduous',
    height: 15, // in meters
    trunkDiameter: 1, // in meters
    age: 50, // in years
    fruit: true,
    region: 'North America',
  },
  {
    name: 'Maritime Pine',
    type: 'Evergreen',
    height: 30, // in meters
    trunkDiameter: 1.8, // in meters
    age: 80, // in years
    fruit: true,
    region: 'Mediterranean',
  },
];

type IAggregate = Record<string, Omit<ITree, 'name'>>;
type IGetAggregate = (ar: ITree[]) => IAggregate;

const getAggregatedTrees: IGetAggregate = ar =>
  ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [name]: { ...rest } };
  }, {});

const getAggregatedTrees2: IGetAggregate = ar => {
  const agr: IAggregate = {};
  ar.forEach(e => {
    const { name, ...rest } = e;
    agr[name] = { ...rest };
  });
  return agr;
};

const getAggregatedTrees3: IGetAggregate = ar => {
  const agr: IAggregate = {};

  for (const t of ar) {
    const { name, ...rest } = t;
    agr[name] = { ...rest };
  }

  return agr;
};

type IBackToArray = (a: IAggregate) => ITree[];

const treesBackToAr: IBackToArray = agr =>
  Object.keys(agr).map(k => ({ name: k, ...{ ...agr[k] } }));

export {
  IAggregate,
  IGetAggregate,
  getAggregatedTrees,
  treesBackToAr,
  getAggregatedTrees2,
  getAggregatedTrees3,
  trees,
};
