import * as c from './concepts';

const getAgr = c.getAgrCelestialBodies(c.celestialBodies);

console.log(`getAgrC ---> `, getAgr);

console.log('back ---> ', c.getBackToCelestialBodies(getAgr));
