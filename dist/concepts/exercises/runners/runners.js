"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgregatedRunners = void 0;
const getAgregatedRunners = ar => [...new Set(ar.flatMap(r => r.events))].reduce((acc, cur) => ({
    ...acc,
    [cur]: ar
        .filter(r => r.events.includes(cur))
        .map(({ events, ...rest }) => ({ ...rest })),
}), {});
exports.getAgregatedRunners = getAgregatedRunners;
