"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepCopy = void 0;
const deepCopy = obj => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let levelObj = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(k => {
        levelObj[k] = (0, exports.deepCopy)(obj[k]);
    });
    return levelObj;
};
exports.deepCopy = deepCopy;
