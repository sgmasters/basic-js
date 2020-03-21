let chainMaker = {
  getLength() {
    if (this.value === undefined) {
      return 0;
    }
    let linksArray = this.split('~~');
    return linksArray.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = ' ';
    }
    if (this.value === undefined) {
      this.value = '( ' + value + ' )';
    } else {
      this.value += '~~( ' + value + ' )';
    }
    return this;
  },
  removeLink(position) {
    if (position !== position || position % 1 !== 0 || typeof position !== 'number') {
      this.flush();
      throw 'Error';
    }
    let chainArr = this.value.split('~~');
    if (chainArr.length < position || position <= 0) {
      this.flush();
      throw 'Error';
    }
    chainArr.splice(position - 1, 1);
    this.value = chainArr.toString().split(',').join('~~');
    return this;
  },
  reverseChain() {
    let old = this.value;
    if (old === undefined) {
      return this;
    }
    let reversed;
    this.value = '';
    old.split('~~').reverse().forEach((elem) => {
      if (reversed === undefined) {
        reversed = elem;
      } else {
        reversed += '~~' + elem;
      }
    });
    this.value = reversed;
    return this;
  },
  finishChain() {
    let result = this.value;
    this.flush();
    return result;
  },
  flush() {
    this.value = undefined;
  }
};

module.exports = chainMaker;
