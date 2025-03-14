interface MiddleEasternCountry {
  name: string;
  capital: string;
  population: number;
  areaSqKm: number;
  language: string;
  currency: string;
  government: string;
  mainExports: string[];
  famousLandmarks: string[];
  timeZone: string;
}

const middleEasternCountries: MiddleEasternCountry[] = [
  {
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    population: 34813871,
    areaSqKm: 2149690,
    language: 'Arabic',
    currency: 'Saudi Riyal',
    government: 'Absolute monarchy',
    mainExports: ['Oil', 'Petrochemicals', 'Natural gas'],
    famousLandmarks: ['Mecca', 'Medina', 'Riyadh Tower'],
    timeZone: 'Arabian Standard Time',
  },
  {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    population: 9890400,
    areaSqKm: 83600,
    language: 'Arabic',
    currency: 'UAE Dirham',
    government: 'Federal absolute monarchy',
    mainExports: ['Oil', 'Natural gas', 'Petrochemicals'],
    famousLandmarks: ['Burj Khalifa', 'Palm Jumeirah', 'Sheikh Zayed Mosque'],
    timeZone: 'Gulf Standard Time',
  },
  {
    name: 'Iran',
    capital: 'Tehran',
    population: 83992949,
    areaSqKm: 1648195,
    language: 'Persian',
    currency: 'Iranian Rial',
    government: 'Islamic republic',
    mainExports: ['Oil', 'Natural gas', 'Chemicals'],
    famousLandmarks: ['Persepolis', 'Naqsh-e Jahan Square', 'Milad Tower'],
    timeZone: 'Iran Standard Time',
  },
  {
    name: 'Qatar',
    capital: 'Doha',
    population: 2832071,
    areaSqKm: 11586,
    language: 'Arabic',
    currency: 'Qatari Riyal',
    government: 'Absolute monarchy',
    mainExports: ['Liquefied natural gas', 'Petroleum products', 'Chemicals'],
    famousLandmarks: [
      'The Pearl-Qatar',
      'Katara Cultural Village',
      'Aspire Tower',
    ],
    timeZone: 'Arabian Standard Time',
  },
  {
    name: 'Israel',
    capital: 'Jerusalem',
    population: 9028900,
    areaSqKm: 20770,
    language: 'Hebrew',
    currency: 'Israeli New Shekel',
    government: 'Unitary parliamentary republic',
    mainExports: ['Technology', 'Diamonds', 'Pharmaceuticals'],
    famousLandmarks: ['Western Wall', 'Masada', 'Dead Sea'],
    timeZone: 'Israel Standard Time',
  },
  {
    name: 'Jordan',
    capital: 'Amman',
    population: 10203134,
    areaSqKm: 89342,
    language: 'Arabic',
    currency: 'Jordanian Dinar',
    government: 'Constitutional monarchy',
    mainExports: ['Phosphates', 'Potash', 'Clothing'],
    famousLandmarks: ['Petra', 'Amman Citadel', 'Wadi Rum'],
    timeZone: 'Jordan Standard Time',
  },
  {
    name: 'Lebanon',
    capital: 'Beirut',
    population: 6825442,
    areaSqKm: 10452,
    language: 'Arabic',
    currency: 'Lebanese Pound',
    government: 'Unitary parliamentary republic',
    mainExports: ['Jewelry', 'Chemicals', 'Machinery'],
    famousLandmarks: ['Byblos', 'Jeita Grotto', 'National Museum of Beirut'],
    timeZone: 'Eastern European Time',
  },
  {
    name: 'Oman',
    capital: 'Muscat',
    population: 5106626,
    areaSqKm: 309500,
    language: 'Arabic',
    currency: 'Omani Rial',
    government: 'Absolute monarchy',
    mainExports: ['Oil', 'Natural gas', 'Fish'],
    famousLandmarks: [
      'Sultan Qaboos Grand Mosque',
      'Wahiba Sands',
      'Nizwa Fort',
    ],
    timeZone: 'Gulf Standard Time',
  },
  {
    name: 'Kuwait',
    capital: 'Kuwait City',
    population: 4281320,
    areaSqKm: 17818,
    language: 'Arabic',
    currency: 'Kuwaiti Dinar',
    government: 'Constitutional monarchy',
    mainExports: ['Oil', 'Petroleum products', 'Chemicals'],
    famousLandmarks: ['Kuwait Towers', 'The Avenues Mall', 'Failaka Island'],
    timeZone: 'Arabian Standard Time',
  },
  {
    name: 'Iraq',
    capital: 'Baghdad',
    population: 40222493,
    areaSqKm: 438317,
    language: 'Arabic',
    currency: 'Iraqi Dinar',
    government: 'Federal parliamentary republic',
    mainExports: ['Oil', 'Crude materials', 'Chemicals'],
    famousLandmarks: [
      'Baghdad Tower',
      'Hanging Gardens of Babylon',
      'Erbil Citadel',
    ],
    timeZone: 'Arabian Standard Time',
  },
  {
    name: 'Yemen',
    capital: 'Sanaa',
    population: 29825968,
    areaSqKm: 527968,
    language: 'Arabic',
    currency: 'Yemeni Rial',
    government: 'Unitary parliamentary republic',
    mainExports: ['Petroleum', 'Cotton', 'Seafood'],
    famousLandmarks: ['Old City of Sanaa', 'Shibam', 'Socotra Archipelago'],
    timeZone: 'Yemen Time',
  },
  {
    name: 'Syria',
    capital: 'Damascus',
    population: 17500657,
    areaSqKm: 185180,
    language: 'Arabic',
    currency: 'Syrian Pound',
    government: 'Unitary republic',
    mainExports: ['Petroleum', 'Textiles', 'Phosphates'],
    famousLandmarks: ['Umayyad Mosque', 'Krak des Chevaliers', 'Palmyra'],
    timeZone: 'Eastern European Time',
  },
  {
    name: 'Egypt',
    capital: 'Cairo',
    population: 104258327,
    areaSqKm: 1002450,
    language: 'Arabic',
    currency: 'Egyptian Pound',
    government: 'Unitary semi-presidential republic',
    mainExports: ['Petroleum', 'Cotton', 'Chemicals'],
    famousLandmarks: ['Pyramids of Giza', 'Sphinx', 'Valley of the Kings'],
    timeZone: 'Eastern European Time',
  },
];

type IAggregate = Record<string, Omit<MiddleEasternCountry, 'name'>>;
type IGetAggregate = (c: MiddleEasternCountry[]) => IAggregate;

const getAggregatedCountries: IGetAggregate = ar => {
  const aggregate: IAggregate = {};

  ar.forEach(c => {
    const { name, ...rest } = c;
    aggregate[name] = { ...rest };
  });

  return aggregate;
};

const getAggregatedCountries2: IGetAggregate = ar => {
  const aggregate: IAggregate = {};

  for (const c of ar) {
    const { name, ...rest } = c;
    aggregate[name] = { ...rest };
  }

  return aggregate;
};

const getAggregatedCountries3: IGetAggregate = ar =>
  ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [name]: { ...rest } };
  }, {});

const agrCountries = getAggregatedCountries3(middleEasternCountries);

type IGetBackToArray = (a: IAggregate) => MiddleEasternCountry[];

const getBackToCountriesAr: IGetBackToArray = agr =>
  Object.keys(agr).map(k => ({
    name: k,
    ...{ ...agr[k] },
  }));

export {
  agrCountries,
  getAggregatedCountries,
  getAggregatedCountries2,
  getAggregatedCountries3,
  getBackToCountriesAr,
  middleEasternCountries,
};
