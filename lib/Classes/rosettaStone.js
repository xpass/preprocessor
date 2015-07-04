/**
 * The rosetta stone class will convert xPath to CSS.
 */
class RosettaStone {

  /**
   * Constructing the element.
   *
   * @param file
   *   The path to the file.
   * @param autoGenerate
   *   Determine if we need to generate the file when initialising the object.
   *   This is useful when need to set other parameters.
   */
  constructor(file, autoGenerate = true) {
    this.Utility = require('./Utility');
    this.filePath = file;

    if (!file) {
      return;
    }

    if (autoGenerate) {
      this.processFile(file);
    }
  }

  /**
   * Setter for the file.
   *
   * @param file
   *   The file path.
   *
   * @returns {RosettaStone}
   */
  setFilePath(file) {
    this.filePath = file;
    return this;
  }

  /**
   * Get the file path.
   *
   * @returns {gulpEslint.verify.filePath|*}
   */
  getFilePath() {
    return this.filePath;
  }

  /**
   * Processing file.
   *
   * @param file
   *   The file path.
   */
  processFile(file) {

    if (file == undefined) {
      // No file path. Get the file path.
      file = this.getFilePath();
    }

    this.Utility.fs().readFile(file, 'utf8', function (err, data) {

      if (err) {
        return console.log(err);
      }

      console.log(data);
    });
  }

  /**
   * Converting xPath to css selector.
   */
  xPathToCss() {
    this.Utility.phpjs();
  }
}

module.exports = RosettaStone;
