"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecialitiesObjChatGPT = void 0;
const getSpecialitiesObjChatGPT = docs => [...new Set(docs.flatMap(d => d.specialities))].reduce((ac, cur) => ({
    ...ac,
    [cur]: docs
        .filter(d => d.specialities.includes(cur))
        .map(({ specialities, ...rest }) => ({ ...rest })),
}), {});
exports.getSpecialitiesObjChatGPT = getSpecialitiesObjChatGPT;
