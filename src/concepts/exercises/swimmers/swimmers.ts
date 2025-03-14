import { IGetBySecialities, ISwimmer } from './models';

const getSecialities: IGetBySecialities = ar =>
  [...new Set(ar.flatMap(s => s.events))].reduce(
    (ac, cur) => ({
      ...ac,
      [cur]: ar
        .filter(s => s.events.includes(cur))
        .map(({ events, ...rest }) => ({ ...rest })),
    }),
    {} as Record<string, Omit<ISwimmer, 'events'>[]>,
  );

export { getSecialities };
