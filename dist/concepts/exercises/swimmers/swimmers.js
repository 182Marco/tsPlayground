"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecialities = void 0;
const getSecialities = ar => [...new Set(ar.flatMap(s => s.events))].reduce((ac, cur) => ({
    ...ac,
    [cur]: ar
        .filter(s => s.events.includes(cur))
        .map(({ events, ...rest }) => ({ ...rest })),
}), {});
exports.getSecialities = getSecialities;
