
/**********Types of Function************/

//Function Statement

// let rVal = 10;
// function fn(a){
//     console.log(a)
//     return 10;
// }
// let rVal = fn("Hello");
// console.log(rVal);

// let rVal = 10;
// function fn(){
//     return 10;
// }
// console.log("rVal", fn());

//function expression

// const funcExp = function(){
//     console.log("I am function expression");
// }
// funcExp();

// const funcExp = function(){
//     console.log("I am function expression");
// }
// funcExp();

//arrow function

// const onePlusAverage = (p, q) =>{
//     return 1 + p * q / 2;
// }
// console.log("Average of p and q is:", onePlusAverage(10, 20));

// IIFE - Immediately Invoked Function Expression

// (function(a){
//     console.log("Immediately Invoked Function Expression");
// })();

/**Synchronus and Asynchronous**/

// Synchrounous - code execute line by line

// console.log("Before");
// function fn(){
//     console.log("Hi, I am just after the before");
// }
// fn();
// console.log("After");

/**Asynchronous - A piece of code execute first after that another part of code which is delayed by setTimeout those code will execute***/

// console.log("Before");

// function fn(){
//     console.log("Hi, I am just after the before");
    
// }
// setTimeout(fn, 2000)
// console.log("After");

// let b = true;
// console.log("Before");
// setTimeout(fn, 2000)

// function fn(){
//     b = false;
//     console.log("Hi, I am just after the before");
    
// }
// console.log("After");
// while(b){

// }
