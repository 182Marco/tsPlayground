import {IDeepCopy} from './deepCopy.models';

export const deepCopy: IDeepCopy = obj => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let levelObj = Array.isArray(obj) ? [] : ({} as any);

  Object.keys(obj).forEach(k => {
    levelObj[k] = deepCopy(obj[k]);
  });

  return levelObj;
};
