Array.prototype.myEach = function(callback) {
  let newArr = [];

  for (let i=0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }

  return newArr;
};

function square_num(num) {
  return num * num;
}

Array.prototype.myMap = function(callback) {

  for (let i=0; i < this.length; i++) {
    let newI = callback(this[i]);
    this[i] = newI;
  }

  return this;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let acc, i;
  
  if (initialValue === undefined) {
    acc = this[0];
    i = 1;
  } else {
    acc = initialValue;
    i = 0;
  }

  for (let j = i; j < this.length; j++) {
    acc = callback(acc, this[j]);
  }

  return acc;
};

function accum(acc, el) {
  return acc + el;
}
