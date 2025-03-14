import {
  IDocNoSpec,
  IGetAllSpecialitiesInSet,
  IGetDocArrayNoSpec,
  IGetSpecialitiesObj,
} from './models';

const getAllSpecialitiesInSet: IGetAllSpecialitiesInSet = ar => [
  ...new Set([...ar.flatMap(d => d.specialities)]),
];

const getDocArrayNoSpec: IGetDocArrayNoSpec = ar =>
  ar.map(({ specialities, ...rest }) => ({ ...rest }));

const getSpecialitiesObj: IGetSpecialitiesObj = docs => {
  const specAr = getAllSpecialitiesInSet(docs);
  const aggregate: Record<string, IDocNoSpec[]> = {};

  specAr.forEach(s => {
    const docsWithThisS = docs.filter(d => d.specialities.includes(s));
    const purifiedDocWithThisS = getDocArrayNoSpec(docsWithThisS);
    aggregate[s] = purifiedDocWithThisS;
  });

  return aggregate;
};

export { getAllSpecialitiesInSet, getSpecialitiesObj, getDocArrayNoSpec };
