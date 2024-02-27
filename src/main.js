const alan = {age: 16, mother: {name: 'Anna', age: 40}};

const sam = {...alan};
sam.mother.age = 50;

console.log('alan.mother.age ---> ', alan.mother.age);
