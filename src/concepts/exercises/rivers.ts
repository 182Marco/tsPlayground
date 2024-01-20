interface River {
  name: string;
  length: number;
  country: string;
  discharge: number;
  mouth: string;
  source: string;
  basinArea: number;
  avgDischarge: number;
  tributaries: string[];
  wildlife: string[];
  cities: string[];
  landmarks: string[];
  islands: string[];
  flowDirection: string;
}

export const rivers: River[] = [
  {
    name: 'Nilo',
    length: 6650,
    country: 'Egitto',
    discharge: 2900,
    mouth: 'Mediterraneo',
    source: 'Lago Vittoria',
    basinArea: 3254558,
    avgDischarge: 2500,
    tributaries: ['Atbara', 'Sobat', 'Blue Nile', 'White Nile'],
    wildlife: ['Coccodrilli', 'Ippopotami', 'Pesci vari'],
    cities: ['Il Cairo', 'Giza', 'Juba'],
    landmarks: ['Piramidi di Giza', 'Valle dei Re'],
    islands: ['Elephantine'],
    flowDirection: 'Nord',
  },
  {
    name: 'Amazzoni',
    length: 6575,
    country: 'Brasile',
    discharge: 209000,
    mouth: 'Atlantico',
    source: 'Nevado Mismi',
    basinArea: 7050000,
    avgDischarge: 170000,
    tributaries: ['Solimões', 'Japurá', 'Negro', 'Madeira'],
    wildlife: ['Piranha', 'Anaconda', 'Caimano'],
    cities: ['Manaus', 'Iquitos', 'Belém'],
    landmarks: ['Foresta Amazzonica', 'Iguazù'],
    islands: ['Marajó'],
    flowDirection: 'Est',
  },
  {
    name: 'Yangtze',
    length: 6300,
    country: 'Cina',
    discharge: 31900,
    mouth: 'Mar Cinese Orientale',
    source: 'Geladaindong Peak',
    basinArea: 1800000,
    avgDischarge: 31900,
    tributaries: ['Min', 'Jialing', 'Hanshui', 'Yalong'],
    wildlife: ['Storione del Yangtze', "Palla d'acqua dolce", 'Delfino rosa'],
    cities: ['Shanghai', 'Chongqing', 'Wuhan'],
    landmarks: ['Tre Gole', 'Grande Salto'],
    islands: ['Zhongzhou'],
    flowDirection: 'Est',
  },
  {
    name: 'Mississippi',
    length: 6275,
    country: 'Stati Uniti',
    discharge: 16200,
    mouth: 'Golfo del Messico',
    source: 'Lago Itasca',
    basinArea: 2980000,
    avgDischarge: 16500,
    tributaries: ['Missouri', 'Ohio', 'Arkansas', 'Red River'],
    wildlife: ['Cigni', 'Alligatori', 'Caprioli'],
    cities: ['New Orleans', 'Memphis', 'St. Louis'],
    landmarks: ['Delta del Mississippi', 'Gateway Arch'],
    islands: ['Isola di Giada'],
    flowDirection: 'Sud',
  },
  {
    name: 'Gange',
    length: 2525,
    country: 'India',
    discharge: 16000,
    mouth: 'Delta del Gange',
    source: 'Gangotri Glacier',
    basinArea: 1110000,
    avgDischarge: 16000,
    tributaries: ['Yamuna', 'Son', 'Gandak', 'Kosi'],
    wildlife: ['Delfino del Gange', 'Coccodrillo marino', 'Gaviale del Gange'],
    cities: ['Varanasi', 'Kolkata', 'Patna'],
    landmarks: ['Ghat di Varanasi', "Tempio d'Oro"],
    islands: ['Sagar'],
    flowDirection: 'Sud',
  },
];

type IGetIObj = (ar: River[]) => Record<string, Omit<River, 'name'>>;

export const getAggrgateRivers: IGetIObj = ar =>
  ar.reduce((a, v) => {
    const {name, ...rest} = v;
    return {...a, [name]: {...rest}};
  }, {});
