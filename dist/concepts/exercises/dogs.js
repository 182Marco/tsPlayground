"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAggregateDogs2 = exports.getAggregateDogs = exports.dogs = void 0;
exports.dogs = [
    {
        breed: 'Labrador Retriever',
        origin: 'United Kingdom',
        size: 'Large',
        temperament: ['Outgoing', 'Even Tempered', 'Gentle', 'Intelligent'],
        lifeExpectancy: 10,
        coat: 'Short',
        colors: ['Yellow', 'Black', 'Chocolate'],
        intelligence: 'High',
        exerciseNeeds: 'High',
        groomingNeeds: 'Low',
        healthIssues: ['Hip Dysplasia', 'Progressive Retinal Atrophy'],
        specialAbilities: ['Guide Dog', 'Search and Rescue'],
        popularity: 1,
        trainability: 'High',
    },
    {
        breed: 'German Shepherd',
        origin: 'Germany',
        size: 'Large',
        temperament: ['Loyal', 'Confident', 'Smart', 'Courageous'],
        lifeExpectancy: 12,
        coat: 'Medium',
        colors: ['Black and Tan'],
        intelligence: 'Very High',
        exerciseNeeds: 'High',
        groomingNeeds: 'Moderate',
        healthIssues: ['Hip Dysplasia', 'Degenerative Myelopathy'],
        specialAbilities: ['Police Dog', 'Search and Rescue'],
        popularity: 2,
        trainability: 'Very High',
    },
    {
        breed: 'Golden Retriever',
        origin: 'United Kingdom',
        size: 'Large',
        temperament: ['Intelligent', 'Friendly', 'Devoted'],
        lifeExpectancy: 12,
        coat: 'Medium',
        colors: ['Cream', 'Golden'],
        intelligence: 'High',
        exerciseNeeds: 'High',
        groomingNeeds: 'Moderate',
        healthIssues: ['Hip Dysplasia', 'Heart Disease'],
        specialAbilities: ['Retrieving', 'Therapy Dog'],
        popularity: 3,
        trainability: 'High',
    },
];
const getAggregateDogs = ar => {
    const aggregate = {};
    for (const d of ar) {
        const { breed, ...rest } = d;
        aggregate[breed] = { ...rest };
    }
    return aggregate;
};
exports.getAggregateDogs = getAggregateDogs;
const getAggregateDogs2 = ar => ar.reduce((a, v) => {
    const { breed, ...rest } = v;
    return { ...a, [breed]: { ...rest } };
}, {});
exports.getAggregateDogs2 = getAggregateDogs2;
