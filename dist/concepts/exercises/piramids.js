"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAggregatePiramids = exports.pyramids = void 0;
// Array of pyramid objects
exports.pyramids = [
    {
        name: 'Great Pyramid of Giza',
        location: 'Giza, Egypt',
        coordinates: { latitude: 29.9792, longitude: 31.1342 },
        height: 146.6,
    },
    {
        name: 'Pyramid of Khafre',
        location: 'Giza, Egypt',
        coordinates: { latitude: 29.9754, longitude: 31.1294 },
        height: 136.4,
    },
    {
        name: 'Pyramid of Menkaure',
        location: 'Giza, Egypt',
        coordinates: { latitude: 29.974, longitude: 31.1287 },
        height: 65,
    },
    {
        name: 'Red Pyramid',
        location: 'Dahshur, Egypt',
        coordinates: { latitude: 29.7935, longitude: 31.1858 },
        height: 104,
    },
    {
        name: 'Bent Pyramid',
        location: 'Dahshur, Egypt',
        coordinates: { latitude: 29.7938, longitude: 31.2209 },
        height: 101.1,
    },
];
const getAggregatePiramids = ar => ar.reduce((a, v) => {
    const { name, ...rest } = v;
    return { ...a, [name]: { ...rest } };
}, {});
exports.getAggregatePiramids = getAggregatePiramids;
