import { IAgrAr, IGetAgrGymnasts } from './models';

const getAgrGymnast: IGetAgrGymnasts = ar =>
  [...new Set(ar.flatMap(r => r.specialties))].reduce(
    (a, v) => ({
      ...a,
      [v]: ar
        .filter(r => r.specialties.includes(v))
        .map(({ specialties, ...rest }) => ({ ...rest })),
    }),
    {} as IAgrAr,
  );

export { getAgrGymnast };
