"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVipAgr = void 0;
const getVipAgr = ar => [...new Set(ar.flatMap(obj => obj.traits))].reduce((a, v) => ({
    ...a,
    [v]: ar
        .filter(obj => obj.traits.includes(v))
        .map(({ traits, ...rest }) => ({ ...rest })),
}), {});
exports.getVipAgr = getVipAgr;
