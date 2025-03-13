"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgregatedSPCharcters = void 0;
const getAgregatedSPCharcters = ar => [...new Set(ar.flatMap(c => c.role))].reduce((a, v) => ({
    ...a,
    [v]: ar
        .filter(c => c.role.includes(v))
        .map(({ role, ...rest }) => ({ ...rest })),
}), {});
exports.getAgregatedSPCharcters = getAgregatedSPCharcters;
