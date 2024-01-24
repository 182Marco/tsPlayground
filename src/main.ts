import * as c from './concepts';

console.log(
  `c.getAggregatedTrees(c.trees) ---> `,
  c.getAggregatedTrees(c.trees),
);
c;

console.log(`trees ---> `, c.treesBackToAr(c.getAggregatedTrees(c.trees)));
