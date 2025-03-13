"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackToCastelsArray = exports.aggregateCatles = exports.getAggregatedCastles3 = exports.getAggregatedCastles2 = exports.getAggregatedCastles = exports.bavarianCastles = void 0;
exports.bavarianCastles = [
    {
        fullName: 'Neuschwanstein Castle',
        location: 'Schwangau',
        yearBuilt: 1869,
        architect: 'Eduard Riedel',
        style: 'Romanesque Revival',
        rooms: 200,
        isHaunted: false,
    },
    {
        fullName: 'Hohenzollern Castle',
        location: 'Hechingen',
        yearBuilt: 1267,
        architect: 'Unknown',
        style: 'Gothic Revival',
        rooms: 140,
        isHaunted: true,
    },
    {
        fullName: 'Linderhof Palace',
        location: 'Ettal',
        yearBuilt: 1878,
        architect: 'Georg Dollmann',
        style: 'Rococo',
        rooms: 70,
        isHaunted: false,
    },
    {
        fullName: 'Herrenchiemsee Palace',
        location: 'Chiemsee',
        yearBuilt: 1886,
        architect: 'Georg Dollmann',
        style: 'Neoclassical',
        rooms: 70,
        isHaunted: true,
    },
    {
        fullName: 'Burg Trausnitz',
        location: 'Landshut',
        yearBuilt: 1204,
        architect: 'Unknown',
        style: 'Gothic',
        rooms: 60,
        isHaunted: false,
    },
];
const getAggregatedCastles = ar => {
    const aggregate = {};
    ar.forEach(e => {
        const { fullName, ...rest } = e;
        aggregate[fullName] = { ...rest };
    });
    return aggregate;
};
exports.getAggregatedCastles = getAggregatedCastles;
const getAggregatedCastles2 = ar => ar.reduce((a, v) => {
    const { fullName, ...rest } = v;
    return { ...a, [fullName]: { ...rest } };
}, {});
exports.getAggregatedCastles2 = getAggregatedCastles2;
const getAggregatedCastles3 = ar => {
    const aggregate = {};
    for (const c of ar) {
        const { fullName, ...rest } = c;
        aggregate[fullName] = { ...rest };
    }
    return aggregate;
};
exports.getAggregatedCastles3 = getAggregatedCastles3;
exports.aggregateCatles = (0, exports.getAggregatedCastles2)(exports.bavarianCastles);
const getBackToCastelsArray = agr => Object.keys(agr).map(k => ({
    fullName: k,
    ...{ ...agr[k] },
}));
exports.getBackToCastelsArray = getBackToCastelsArray;
