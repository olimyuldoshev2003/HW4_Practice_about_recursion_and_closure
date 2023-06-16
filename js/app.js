//Recursion

//Task 1

// function sum(a) {
//     if(a === 0) {
//         return 0;
//     } else {
//         return sum(a-1) + a;
//     }
// }

// console.log(sum(5));

//Task 2

// function factorial(a) {
// if(a === 0) {
//     return 1;
// } else {
//     return factorial(a - 1) * a;
// }
// }

// console.log(factorial(6));

//Task 3

// function doubleFactorial(a) {
//     if(a === 0 || a === 1) {
//         return 1;
//     } else {
//         return doubleFactorial(a - 2) * a;
//     }
// }

// console.log(doubleFactorial(9));

//Task 4

// function fibonacci(a) {
//     if(a === 1 || a === 2) {
//         return 1;
//     } else {
//         return fibonacci(a - 1) + fibonacci(a - 2);
//     }
// }

// console.log(fibonacci(5));

//Task 5 

// function sumDigit(n) {
//     if(n === 0) {
//         return n;
//     } return n % 10 + sumDigit(Math.floor(n / 10))
// }

// console.log(sumDigit(123));

//Task 6

// function increase(a, i = 1) {
//   if (i > 10) {
//     return 0;
//   }
//   return a * i + increase(a, i + 1);
// }
// const num = 1;
// const sum = increase(num);
// console.log(sum);

//Task 7

// function evenRecursion(num) {
//     if(num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(evenRecursion(124));

//Closure

//Task 8

// function createMultiplier(a) {
//     return (b) => {
//         return a * b;
//     }
// }

// let double = createMultiplier(4);
// console.log(double(5));

// Task 9

// function incrementBy(a) {
//   return (b) => {
//    return (c) => {
//     console.log(a + b);
//     return a + b + c;
//    }
//   };
// }

// const addFive = incrementBy(5);
// const three = addFive(10)
// console.log(three(10));

// Task 10
// function createAdder(a) {
//     return (b) => {
//         return a + b;
//     }
// }

// let double = createAdder(5);

// console.log(double(-5));

// Task 11
// function product(a1, b1) {
//     return (a2, b2) => {
//         return(a3, b3) => {
//             return a1 * a2 * a3 + b1 * b2 * b3;
//         }
//     }
// }

// let double = product(1, 2)(1, 1)(2, 3);
// let double2 = product(10, 2)(5, 0)(2, 3);
// let double3 = product(1, 2)(2, 3)(3, 4);
// console.log(double);
// console.log(double2);
// console.log(double3);

// Task 12 

// function makePassword(str1) {
//     return (str2) => {
//         if(str1 === str2) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// let sendPassword = makePassword("Library");
// console.log(sendPassword("Library"));
