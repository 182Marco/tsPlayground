import * as c from './concepts';

console.log(`users ---> `, c.OrganizeInSingleObj(c.users));
console.log(`cars ---> `, c.aggregateCars(c.cars));
console.log(`piramids ---> `, c.getAggregate(c.pyramids));
console.log(`rivers ---> `, c.getObj(c.rivers));
console.log(`cities ---> `, c.aggregateCities(c.cities));
