const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumber = function(sum, numleft, completionCallback) {
  if (numleft === 0) {
    return completionCallback(sum);
  }


  reader.question("Enter #: ", function (numString1) {
      let num = parseInt(numString1);
      sum += num;
      console.log('sldkfjslf');
      addNumber(sum, numleft - 1, callback);
  });

};

const callback = function(sum) {
  console.log(`Total Sum: ${sum}`);
  reader.close();
};

addNumber(0, 3, callback);
