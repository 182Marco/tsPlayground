"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgrGymnast = void 0;
const getAgrGymnast = ar => [...new Set(ar.flatMap(r => r.specialties))].reduce((a, v) => ({
    ...a,
    [v]: ar
        .filter(r => r.specialties.includes(v))
        .map(({ specialties, ...rest }) => ({ ...rest })),
}), {});
exports.getAgrGymnast = getAgrGymnast;
