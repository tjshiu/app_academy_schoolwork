Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      let first = this[i];
      let second = this[i + 1];

      if (first > second) {
        this[i] = second;
        this[i + 1] = first;
        sorted = false;
      }
    }
  }

  return this;
};

String.prototype.substrings = function() {
  let newSubs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      newSubs.push(this.slice(i, j));
    }
  }

  return newSubs;
};
