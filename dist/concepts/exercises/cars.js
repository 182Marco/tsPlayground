"use strict";
// EXERCISE CREATED BY CHATGPT FOR ME ❤️
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAggregateCars = exports.cars = void 0;
// Array of car objects
exports.cars = [
    { model: 'Toyota', year: 2020, color: 'Blue' },
    { model: 'Honda', year: 2019, color: 'Red' },
    { model: 'Ford', year: 2021, color: 'Black' },
];
const getAggregateCars = cars => cars.reduce((a, v) => ({
    ...a,
    [v.model]: {
        color: v.color,
        year: v.year,
    },
}), {});
exports.getAggregateCars = getAggregateCars;
