const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('( )');
    } else {
      this.chain.push(String(value));
    }

    return this;
  },

  removeLink(position) {
    if (position % 1 > 0 || position > this.chain.length || position < 1 || !(Number(position))) {
      this.chain = [];

      throw new Error("You can't remove incorrect link!");
    }

    this.chain = this.chain.filter((_, index) => index !== position - 1);

    return this;
  },

  reverseChain() {
    this.chain.reverse();

    return this;
  },

  finishChain() {
    let finish = '';

    this.chain.forEach((item, i) => {
      if (i === 0){
        finish += `( ${item} )`;
      } else {
        finish += `~~( ${item} )`;
      }
    })

    this.chain = []

    return finish;
  }
};

module.exports = {
  chainMaker
};
