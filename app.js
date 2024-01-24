"use strict"

// 1-misol 

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
 
/// javobi

// function sleep(millis) {
//     return new Promise(resolve => setTimeout(resolve, millis));
//   }
  
//   const t = Date.now();
//   sleep(100).then(() => console.log(Date.now() - t)); // 100
  


// 2-misol

// Input: 
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25
// Explanation: For empty arrays, the answer is always init.
 


// 2-misol javobi

// var reduce = function(nums, fn, init) {
//     if (nums.length === 0) {
//         return init;
//     }

    
//     return nums.reduce(fn, init);
// };


// const nums = [];
// const fn = function sum(accum, curr) { return 0; };
// const init = 25;

// const result = reduce(nums, fn, init);
// console.log(result); 


