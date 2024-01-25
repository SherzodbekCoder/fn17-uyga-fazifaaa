// function son() {
//     console.log(2 + 3);

// }
// son()





// function sum(arg1 = 5, arg2 = 10) {
//     let s1 = arg1 + arg2;
//     return s1;
// }
// let s = sum(6, 20);
// console.log(s);




// function maxTwoNumbers(arg1, arg2) {
//     let max;
//     if (arg1 > arg2) {
//         max = arg1;
//     } else {
//         max = arg2;
//     }

//     return max;
// }


// function fact(arg) {
//     let p = 1
//     for (let i = 1; i <= arg; i++) {
//         p *=
        
//     }
// }





//1-misol
// function sumN(arg) {
//     let sum = 0;
//     for (let i = 1; i <= arg; i++) {
//         sum = sum + i;
        
//     }

//     return sum;
// }
// console.log(sumN(6));



//2-misol
// function sonN(a, b, c) {
//     let max;
//     if (a > b) {
//         max = a;
//      } else {
//         max = b
//      }
    
//      if(max < c){
//         max = c
//      }
//      return max
// }
// console.log(sonN(10, 40, 5));












// 1-usul 

// function sum(a, b) {
//     return a + b;
// }


// 2-usul

// const sum1 = function(a, b) {
//     return a + b;
// }


// const sum2 = (a, b) => {
//     return a + b;
// }






































//1-Misol
//Regular function
// function firstNumber(arg){
//     let res = arg ** 3;
//     return res;
// }
// console.log(firstNumber(5));


// // Express function
// const firstNumber = function (arg){
//     let res = arg ** 3;
//     return res;
// }
// console.log(firstNumber(5));
// // Arrow function
// const firstNumber = (arg) => {
//     let res = arg ** 3;
//     return res;
// }
// console.log(firstNumber(5));


//
//2 Masala
//Regular function
// function son(a = 10, b = 9) {
//     let res;
//     if (a > b) {
//         res = a ** 2;
//     } else {
//         res = b ** 2;
//     }
//     return res;
// }
// console.log(son(2, 1));

// Express function
// const son = function (a = 1, b = 10) {
//     let res;
//     if (a > b) {
//         res = a ** 2;
//     } else {
//         res = b ** 2;
//     }
//     return res;
// }
// console.log(son(10, 5));

// Arrow fnction
// const son = (a = 10, b = 30) => {
//     let res;
//     if (a > b) {
//         res = a ** 2;
//     } else {
//         res = b ** 2;
//     }
//     return res;
// }
// console.log(son(10, 5));


//3-Misol
////Regular function
// function num(arg = 943) {
//     let res;
//     let b = arg % 10;
//     let o = Math.trunc((arg /10) % 10);
//     let y = Math.trunc(arg / 100);
//     res = b + o + y;;
//     return res
// }
// console.log(num(421));

// Express function
// const num = function(arg = 521) {
//     let res;
//     let b = arg % 10;
//     let o = Math.trunc((arg /10) % 10);
//     let y = Math.trunc(arg / 100);
//     res = b + o + y;;
//     return res
// }
// console.log(num(473));


// Arrow function
// const num = (arg = 143) => {
//     let res;
//     let b = arg % 10;
//     let o = Math.trunc((arg / 10) % 10);
//     let y = Math.trunc(arg /100);
//     res = b + o + y;
//     return res
// }
// console.log(num(545));


//4-Misol
// Regular function
// function Func(num = 10) {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             sum++
//         }
//     }
//     return sum;
// }
// console.log(Func(10));

// Express function
// const Func = function(num = 10){
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(Func(18));

//  Arrow function
// const Func = (num = 93) => {
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         if(num % i == 0){
//             sum++
//         }
//     }
//     return sum
// }
// console.log(Func(31));



//5-Misol
// Regular function
// function oneFunc(num = 10) {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 1) {
//             sum++
//         }
//     }
//     return sum;
// }
// console.log(oneFunc(10));

// Express function
// const oneFunc = function (num = 10) {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 1) {
//             sum++
//         }
//     }
//     return sum;
// }
// console.log(oneFunc(18));

//  Arrow function
// const oneFunc = (num = 93) => {
//     let sum = 0
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 1) {
//             sum++
//         }
//     }
//     return sum;
// }
// console.log(oneFunc(31));


//6-Misol
// Regular function
// function iFunc(a, b) {
//     let sum = 1;
//     for (let i = a; i <= b; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum *= i;
//         }
//     }
//     return sum;
// }
// console.log(iFunc(1, 30));


// Express function
// const iFunc = function (a, b) {
//     let sum = 1;
//     for (let i = a; i <= b; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum *= i;
//         }
//     }
//     return sum;
// }
// console.log(iFunc(10, 30));


//  Arrow function
// const iFunc = (a, b) => {
//     let sum = 1;
//     for (let i = a; i <= b; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum *= i;
//         }
//     }
//     return sum;
// }
// console.log(iFunc(14, 60));


//7-Misol
// Regular function
// function full(arg) {
//     let res;
//     let counter = 0;
//     for(let i = 1; i <= arg; i++){
//         if (arg % i == 0) {
//             counter++
//         }
//         if(counter == 2){
//             res = `Tub son`;
//         }else{
//             res = ` tub emas`;
//         }
//     }
//     return res;
// }
// console.log(full(11));


// Express function
// const full =  function(arg){
//     let res;
//     let counter = 0;
//     for(let i = 1; i <= arg; i++){
//         if (arg % i == 0) {
//             counter++
//         }
//         if(counter == 2){
//             res = `Tub son`;
//         }else{
//             res = ` tub emas`;
//         }
//     }
//     return res;
// }
// console.log(full(11));


//  Arrow function
// const full = (arg) => {
//     let res;
//     let counter = 0;
//     for(let i = 1; i <= arg; i++){
//         if (arg % i == 0) {
//             counter++
//         }
//         if(counter == 2){
//             res = `Tub son`;
//         }else{
//             res = ` tub emas`;
//         }
//     }
//     return res;
// }
// console.log(full(123));

