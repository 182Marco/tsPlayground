"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treesBackToAr = exports.getAggregatedTrees3 = exports.getAggregatedTrees2 = exports.getAggregatedTrees = exports.trees = void 0;
exports.trees = [
    {
        name: 'Oak',
        type: 'Deciduous',
        height: 25, // in meters
        trunkDiameter: 1.5, // in meters
        age: 100, // in years
        fruit: false,
        region: 'Europe',
    },
    {
        name: 'Sequoia',
        type: 'Evergreen',
        height: 80, // in meters
        trunkDiameter: 7, // in meters
        age: 1200, // in years
        fruit: false,
        region: 'North America',
    },
    {
        name: 'Cedar of Lebanon',
        type: 'Evergreen',
        height: 40, // in meters
        trunkDiameter: 2.5, // in meters
        age: 300, // in years
        fruit: true,
        region: 'Middle East',
    },
    {
        name: 'Maple',
        type: 'Deciduous',
        height: 15, // in meters
        trunkDiameter: 1, // in meters
        age: 50, // in years
        fruit: true,
        region: 'North America',
    },
    {
        name: 'Maritime Pine',
        type: 'Evergreen',
        height: 30, // in meters
        trunkDiameter: 1.8, // in meters
        age: 80, // in years
        fruit: true,
        region: 'Mediterranean',
    },
];
const getAggregatedTrees = ar => ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [name]: { ...rest } };
}, {});
exports.getAggregatedTrees = getAggregatedTrees;
const getAggregatedTrees2 = ar => {
    const agr = {};
    ar.forEach(e => {
        const { name, ...rest } = e;
        agr[name] = { ...rest };
    });
    return agr;
};
exports.getAggregatedTrees2 = getAggregatedTrees2;
const getAggregatedTrees3 = ar => {
    const agr = {};
    for (const t of ar) {
        const { name, ...rest } = t;
        agr[name] = { ...rest };
    }
    return agr;
};
exports.getAggregatedTrees3 = getAggregatedTrees3;
const treesBackToAr = agr => Object.keys(agr).map(k => ({ name: k, ...{ ...agr[k] } }));
exports.treesBackToAr = treesBackToAr;
