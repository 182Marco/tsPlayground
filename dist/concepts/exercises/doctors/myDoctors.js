"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecialitiesObj = exports.getDocArrayNoSpec = exports.getAllSpecialitiesInSet = void 0;
const getAllSpecialitiesInSet = ar => [
    ...new Set([...ar.flatMap(d => d.specialities)]),
];
exports.getAllSpecialitiesInSet = getAllSpecialitiesInSet;
const getDocArrayNoSpec = ar => ar.map(({ specialities, ...rest }) => ({ ...rest }));
exports.getDocArrayNoSpec = getDocArrayNoSpec;
const getSpecialitiesObj = docs => {
    const specAr = (0, exports.getAllSpecialitiesInSet)(docs);
    const aggregate = {};
    specAr.forEach(s => {
        const docsWithThisS = docs.filter(d => d.specialities.includes(s));
        const purifiedDocWithThisS = (0, exports.getDocArrayNoSpec)(docsWithThisS);
        aggregate[s] = purifiedDocWithThisS;
    });
    return aggregate;
};
exports.getSpecialitiesObj = getSpecialitiesObj;
