import {IAgr, IGetVipAgr} from './models';

export const getVipAgr: IGetVipAgr = ar =>
  [...new Set(ar.flatMap(obj => obj.traits))].reduce(
    (a, v) => ({
      ...a,
      [v]: ar
        .filter(obj => obj.traits.includes(v))
        .map(({traits, ...rest}) => ({...rest})),
    }),
    {} as IAgr,
  );
