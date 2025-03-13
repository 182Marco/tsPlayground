import {IGetAgrRunners, AgrRunners} from './models';

export const getAgregatedRunners: IGetAgrRunners = ar =>
  [...new Set(ar.flatMap(r => r.events))].reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: ar
        .filter(r => r.events.includes(cur))
        .map(({events, ...rest}) => ({...rest})),
    }),
    {} as AgrRunners,
  );
