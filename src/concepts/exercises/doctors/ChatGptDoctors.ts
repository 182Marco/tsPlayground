import {IDocNoSpec, IGetSpecialitiesObj} from './models';

export const getSpecialitiesObjChatGPT: IGetSpecialitiesObj = docs =>
  [...new Set(docs.flatMap(d => d.specialities))].reduce(
    (ac, cur) => ({
      ...ac,
      [cur]: docs
        .filter(d => d.specialities.includes(cur))
        .map(({specialities, ...rest}) => ({...rest})),
    }),
    {} as Record<string, IDocNoSpec[]>,
  );
