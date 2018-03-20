// const sum = function(...args) {
//   let result = 0;
//   args.forEach((el) => {
//     result += el;
//   });
//
//   return result;
// };
//
// console.log(sum(1, 2, 3));

//My Bind!
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const lebron = new Cat("Lebron");
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// Function.prototype.myBind = function(ctx) {
//   const bindArgs = Array.from(arguments).slice(1);
//   const fn = this;
//   return function() {
//     const callArgs = Array.from(arguments);
//     fn.apply(ctx, bindArgs.concat(callArgs));
//   };
// };
//
// Function.prototype.myBind2 = function(ctx, ...bindArgs) {
//   // const bindArgs = args;
//   // const fn = this;
//   return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
// };
//
// console.log(markov.says.myBind2(breakfast)("meow", "a tree"));
// console.log(markov.says.myBind2(breakfast, "meow", "Kush")());
// console.log(lebron.says.myBind2(markov, "meow", "James")());


//Curried SUM ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function curriedSum(numArgs) {
  const numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    let sum = 0;

    if (numbers.length === numArgs) {
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  };
}

Function.prototype.curry = function(numArgs) {
  const numbers = [];
  const fn = this;

  return function _curry(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      // debugger;
      return fn(...numbers);
    } else {
      return _curry;
    }
  };

};
