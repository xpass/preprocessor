// Why not: Rossetta = new require('./Classes/rosettaStone');?
var Rossetta = require('./Classes/rosettaStone');
var Utility = require('./Classes/Utility');

var R = new Rossetta;

R.xPathToCss();

// Using phpjs.
var diff = Utility.phpjs().array_diff([2, 3], [2, 1]);
// Using loadsh.
var map = Utility.lodash().map([1, 2, 3], function(n) { return n * 3; });

// Output:
console.log(diff, map);
