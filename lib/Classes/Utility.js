/**
 * This class wrapping all the services we need. This come from an OOP
 * architecture.
 */
class Utility {

  /**
   * Get the phpJs library.
   *
   * @returns {phpjs|exports}
   */
  static phpjs() {
    return require('phpjs');
  }

  /**
   * Get the lo dash library.
   *
   * @returns {exports}
   */
  static lodash() {
    return require('lodash');
  }

  /**
   * Get the File system module.
   *
   * @returns {exports}
   */
  static fs() {
    return require('fs');
  }
}

module.exports = Utility;
