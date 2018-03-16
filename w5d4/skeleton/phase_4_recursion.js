function range(start, end) {
  let result = [];
  if (start === end) {
    return end;
  }
  result.push(start);
  return result.concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) * exponent2(base, exp / 2);
  } else {
    return base * (exponent2(base, (exp - 1) / 2) * (exponent2(base, (exp - 1) / 2)));
  }
}

function fibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
    let fibs = fibonacci(n-1);
    fibs.push(fibs[fibs.length -1] + fibs[fibs.length - 2]);
    return fibs;

}

function deepDup(arr) {
  let dupArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      dupArr.push(deepDup(arr[i]));
    } else {
      dupArr.push(arr[i]);
    }
  }

  return dupArr;
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return null;
  }
  let midIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx + 1);
  let mid = arr[midIdx];

  if (target === mid) {
    return midIdx;
  } else if (target < mid) {
    return bsearch(left, target);
  } else {
    if (bsearch(right, target) === null) {
      return null;
    }
    return midIdx + 1 + bsearch(right, target);
  }


}

function mergesort(arr) {
  if (arr === 1) {
    return arr;
  }

  let midIdx = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midIdx);
  let rightArr = arr.slice(0, midIdx);


  function merge(left, right) {
    let merged = [];

    while (left.length > 0 && right.length > 0) {
      if (left.first > right.first) {
        merged.push(right.pop);
      } else {
        merged.push(left.pop);
      }
    }

    merged.concat(left);
    merged.concat(right);

    return merged;
  }
}
