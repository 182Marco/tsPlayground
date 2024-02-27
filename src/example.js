// const john = {age: 16};

// const bill = john;
// bill.age = 18;

// console.log('john --> ', john);

const john = {age: 16};

const bill = {...john};
bill.age = 18;

console.log(john);

// const alan = {age: 16, mother: {name: 'Ana', age: 40}};

// const sam = {...alan};

// alan.mother.age = 50;

// console.log('sam --> ', sam);

const alan = {age: 16, mother: {name: 'Anna', age: 40}};

const sam = {...alan, mother: {...alan.mother}};

alan.mother.age = 50;

console.log('sam ---> ', sam);

////
/////

const deepCopy = p => {
  if (typeof p === 'function') {
    return p.bind({});
  }
  if (Array.isArray(p)) {
    return p.map(item => deepCopy2(item));
  }
  if (typeof p === 'object' && p !== null) {
    const copiedObj = {};

    Object.keys(p).forEach(key => (copiedObj[key] = deepCopy2(p[key])));

    return copiedObj;
  }

  return p;
};
