interface IMoto {
  brand: string;
  model: string;
  year: number;
  engineDisplacement: number;
  topSpeedKph: number;
  acceleration0to100: number;
  weightKg: number;
  fuelCapacityLiters: number;
  fuelType: string;
  seatHeightCm: number;
  colors: string[];
  priceUSD: number;
  category: string;
  features: string[];
}

const motos: IMoto[] = [
  {
    brand: 'Ducati',
    model: 'Panigale V4',
    year: 2022,
    engineDisplacement: 1103,
    topSpeedKph: 305,
    acceleration0to100: 2.6,
    weightKg: 198,
    fuelCapacityLiters: 16,
    fuelType: 'Gasoline',
    seatHeightCm: 83,
    colors: ['Red', 'White', 'Black'],
    priceUSD: 24995,
    category: 'Sport',
    features: ['Quick Shifter', 'Riding Modes', 'Cornering ABS'],
  },
  {
    brand: 'Harley-Davidson',
    model: 'Street Glide',
    year: 2022,
    engineDisplacement: 1868,
    topSpeedKph: 170,
    acceleration0to100: 4.5,
    weightKg: 375,
    fuelCapacityLiters: 22.7,
    fuelType: 'Gasoline',
    seatHeightCm: 69,
    colors: ['Black', 'Blue', 'Silver'],
    priceUSD: 21999,
    category: 'Cruiser',
    features: ['Infotainment System', 'Cruise Control', 'ABS'],
  },
  {
    brand: 'Honda',
    model: 'CBR1000RR-R Fireblade',
    year: 2022,
    engineDisplacement: 999,
    topSpeedKph: 299,
    acceleration0to100: 2.8,
    weightKg: 201,
    fuelCapacityLiters: 16.1,
    fuelType: 'Gasoline',
    seatHeightCm: 83,
    colors: ['Red', 'Blue', 'White'],
    priceUSD: 28999,
    category: 'Sport',
    features: [
      'Quick Shifter',
      'Electronically Adjustable Suspension',
      'Cornering ABS',
    ],
  },
  {
    brand: 'BMW',
    model: 'R1250GS',
    year: 2022,
    engineDisplacement: 1254,
    topSpeedKph: 200,
    acceleration0to100: 3.6,
    weightKg: 249,
    fuelCapacityLiters: 20,
    fuelType: 'Gasoline',
    seatHeightCm: 87,
    colors: ['Blue', 'White', 'Black'],
    priceUSD: 17995,
    category: 'Adventure',
    features: ['Dynamic ESA', 'Riding Modes', 'ABS Pro'],
  },
  {
    brand: 'Kawasaki',
    model: 'Ninja ZX-10R',
    year: 2022,
    engineDisplacement: 998,
    topSpeedKph: 299,
    acceleration0to100: 2.7,
    weightKg: 207,
    fuelCapacityLiters: 17,
    fuelType: 'Gasoline',
    seatHeightCm: 83,
    colors: ['Green', 'Black', 'Grey'],
    priceUSD: 16299,
    category: 'Sport',
    features: ['Quick Shifter', 'Cornering Management', 'Launch Control'],
  },
];

type IAggregate = Record<string, Omit<IMoto, 'brand'>>;
type IGetAggregate = (m: IMoto[]) => IAggregate;

const getAggregateMotos: IGetAggregate = ar => {
  const aggregate: IAggregate = {};

  for (const m of ar) {
    const { brand, ...rest } = m;
    aggregate[brand] = { ...rest };
  }

  return aggregate;
};

const getAggregateMotos2: IGetAggregate = ar =>
  ar.reduce((a, v) => {
    const { brand, ...rest } = v;
    return { ...a, [brand]: { ...rest } };
  }, {});

export { getAggregateMotos, getAggregateMotos2, motos };
