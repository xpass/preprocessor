var Rossetta = require('./Classes/rosettaStone');
var Utility = require('./Classes/Utility');
var file = process.argv[2] ? process.argv[2] : 'lib/test/css/test.xpss';

// One way.
new Rossetta()
  .setFilePath(file)
  .processFile();

// Other way.
new Rossetta(file);
