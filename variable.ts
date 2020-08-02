function f() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}

var g = f();
console.log(g());

function fun(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log(fun(true));  // returns '10'
console.log(fun(false)); // returns 'undefined'
// // Without IIFE
// for (var i = 0; i < 10; i++) {
//   setTimeout(function () { console.log(i); }, 100 * i);
// }

// //With IIFE
// for (var i = 0; i < 10; i++) {
//     // capture the current state of 'i'
//     // by invoking a function with its current value
//     (function(i) {
//         setTimeout(function() { console.log(i); }, 100 * i);
//     })(i);
// }

function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }

  return sum;
}

console.log(sumMatrix([[1, 4], [2, 8]]))


for (let i = 0; i < 10; i++) {
  setTimeout(function () { console.log(i); }, 100 * i);
}


//Consts
const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
}

// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };
console.log(kitty)
// all "okay"

kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
console.log(kitty)

// Array Destructuring 
let input = ["cat", "dog"];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2


// Tuple Destructuring
let tuple: [number, string, boolean] = [7, "hello", true];

let [a, b, c] = tuple; // a: number, b: string, c: boolean

// Object destructuring #
let o = {
  a: "foo",
  b: 12,
  c: "bar"
};
let { a, b } = o;

// Default values
function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject;
}

type C = { a: string, b?: number }
function f({ a, b }: C): void {
  // ...
}

// Spread Operator Arrays
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];



// Spread Operator Objects
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };