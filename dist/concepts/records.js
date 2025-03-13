"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAggregateUsers = exports.users = void 0;
exports.users = [
    {
        fullName: 'Alice',
        email: 'alice@gmail.com',
        id: 1,
    },
    {
        fullName: 'Bob',
        email: 'bob@gmail.com',
        id: 2,
    },
    {
        fullName: 'Charlie',
        email: 'charlie@gmail.com',
        id: 3,
    },
];
const getAggregateUsers = users => users.reduce((a, v) => ({
    ...a,
    [v.fullName]: {
        email: v.email,
        id: v.id,
    },
}), {});
exports.getAggregateUsers = getAggregateUsers;
