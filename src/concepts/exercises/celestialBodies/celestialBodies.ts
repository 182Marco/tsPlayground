import { IAgr, IGetAgr, IGetBackToCelestialBodies } from './models';

const getAgrCelestialBodies: IGetAgr = ar =>
  ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [v.name]: { ...rest } };
  }, {} as IAgr);

const getBackToCelestialBodies: IGetBackToCelestialBodies = agr =>
  Object.keys(agr).map(k => ({ name: k, ...{ ...agr[k] } }));

export { getAgrCelestialBodies, getBackToCelestialBodies };
