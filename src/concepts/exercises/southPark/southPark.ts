import {IGetAgregated, IAgregated} from './models';

export const getAgregatedSPCharcters: IGetAgregated = ar =>
  [...new Set(ar.flatMap(c => c.role))].reduce(
    (a, v) => ({
      ...a,
      [v]: ar
        .filter(c => c.role.includes(v))
        .map(({role, ...rest}) => ({...rest})),
    }),
    {} as IAgregated,
  );
