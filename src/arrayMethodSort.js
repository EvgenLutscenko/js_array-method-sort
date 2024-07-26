'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        if (compareFunction) {
          if (compareFunction(this[i], this[j]) > 0) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        } else {
          if (String(this[j]) < String(this[i])) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
