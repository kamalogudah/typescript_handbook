var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
console.log(g());
function fun(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(fun(true)); // returns '10'
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
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            sum += currentRow[i_1];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 4], [2, 8]]));
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
//Consts
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
// Error
// kitty = {
//   name: "Danielle",
//   numLives: numLivesForCat
// };
console.log(kitty);
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
console.log(kitty);
// Array Destructuring 
var input = ["cat", "dog"];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
// Tuple Destructuring
var tuple = [7, "hello", true];
var a = tuple[0], b = tuple[1], c = tuple[2]; // a: number, b: string, c: boolean
// Object destructuring #
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
// Default values
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function f(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
// Spread Operator Arrays
var first = [1, 2];
var second = [3, 4];
var bothPlus = __spreadArrays([0], first, second, [5]);
// Spread Operator Objects
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
