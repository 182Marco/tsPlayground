"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackToCelestialBodies = exports.getAgrCelestialBodies = void 0;
const getAgrCelestialBodies = ar => ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [v.name]: { ...rest } };
}, {});
exports.getAgrCelestialBodies = getAgrCelestialBodies;
const getBackToCelestialBodies = agr => Object.keys(agr).map(k => ({ name: k, ...{ ...agr[k] } }));
exports.getBackToCelestialBodies = getBackToCelestialBodies;
