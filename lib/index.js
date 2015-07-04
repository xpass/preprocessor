var Rossetta = require('./Classes/rosettaStone');
var Utility = require('./Classes/Utility');
var file = process.argv[2] ? process.argv[2] : 'lib/test/css/test.xpss';

// Other way.
new Rossetta(file);
