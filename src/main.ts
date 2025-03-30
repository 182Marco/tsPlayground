import * as C from './concepts';

console.log(C.isDog(C.myDog));
console.log(C.isDog(C.myCat));

// Test
const cache = new C.LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3); // Removes key 2
console.log(cache.get(2)); // -1
cache.put(4, 4); // Removes key 1
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
