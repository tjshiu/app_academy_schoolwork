Array.prototype.uniq = function() {
  let newArr = [];

  for (let i = 0; i < this.length; i++) {
    if (!newArr.includes(this[i])) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

Array.prototype.twoSum = function() {
  let newArr = [];

  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        newArr.push([i, j]);
      }
    }
  }

  return newArr;
};

Array.prototype.transpose = function() {
  let matrix = [];
  for (let i = 0; i < this.length; i++) {
    matrix[i] = [];
  }
  for (let i=0; i < this.length; i++) {
    for (let j=0; j < this[0].length; j++) {
      matrix[i].push(this[j][i]);
    }
  }

  return matrix;
};
