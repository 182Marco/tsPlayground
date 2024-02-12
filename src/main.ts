import * as c from './concepts';

const myObj = {
  a: {a: 'a', b: 1},
  c: 'c',
};

console.log(c.deepCopy(myObj));
