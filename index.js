/*
//declaring function

function printMe(){
  console.log('printing...');
}
printMe();

function printThis(param){
  console.log(param);
}
printThis('Dakin');
*/
//declaring function using the function expression

const printMeAgain = function (){
  console.log('print...');
}

// printMeAgain();

const printMeAgainWithParam = function (a, b){
  console.log(a, b);
}

// printMeAgainWithParam(10, 20);

//Return from a function

function sum(a, b){
  let ret = a + b;
  return ret;
}
// console.log(sum(2, 3));

//Default Parameters

function calc(a, b = 0){
  return (2 * (a + b));
}

// console.log(calc(3, 3));
// console.log(calc(3));


//Rest parameters - Allows a function to accept any number of arguments as an array

function collectThings(x, ...y){
  console.log(x);
  console.log(y);
}

// collectThings(1,2,3,4,5,6,7,8,9);

//Arrow Functions/Fat arrow syntax

const add = (x, y) => x + y;

// console.log(add(2, 3));

//Nested Functions

function outer(){
  console.log('Outer');
  function inner(){
    console.log('Inner');
  }
  inner();
}

// outer();

//Function Scope
//A function can access all the variables inside the scope it is defined
//A variable definde inside the function scope cannot be accessed outside of it

function doSomething(){
  let x = 10;
  const y = 20;
  var z = 30;

  console.log(x, y, z);
}

// doSomething();
// console.log(x, y, z);
// console.log(z);

var x = 10;
const y = 20;
let z = 30;

function doSomething2(){
  console.log("2", x, y,z);
  let w = 23;
  function doSomething3(){
    console.log("3", x, y,z);
    console.log("3", w);
  }
  doSomething3();
}
// doSomething2();

//Closures
//Closure is a variable and an environment that you can execute freely
//Nested functions are closure

function outer(x){
  function inner(y){
    console.log(x);
    console.log(y);
    return x + y;
  }
  return inner;
}
const outerReturn = outer(10);

// console.log(outerReturn);
// console.log(outerReturn(2));


//Callback Function
function foo(bar){
  bar();
}

foo(function (){
  console.log('bar');
})

function named(){
  console.log('bar');
}

foo(named);

function foo1(bar){
  if(itsNight){
    bar();
  }

  if(isDrinksOverCheckOnline){
    bar();
  }
}

//Higher Order Function HOF - normal function that takes one or more function as an argument and/or return a function as a value of it


function getCapture(camera){
  camera();
};

getCapture(function(){
  console.log('Canon');
});

function returnFn(){
  return function (){
    console.log('returning');
  }
}
const fn = returnFn();
console.log(fn());

//Example of HOF
[1,2, 3].filter(function(element){
  return element > 2;
})

//Pure Function - A function that produces the same output for the same input
//Helps in predictability
function sayGreeting(name){
  return `Hello ${name}`;
}

// console.log(sayGreeting('Dakin'));

//Impure function - Does not produce same output for the same input because it is depending on something which is called side effect
//Side effect is the variable that is outside of the scope of sayGreeting() function which it cannot control since any one can change it
let greeting = "Hello";

function sayGreeting(name){
  return `${greeting} ${name}`;
}

console.log(sayGreeting("John"));
console.log(sayGreeting("John"));
greeting = 'Hola';
console.log(sayGreeting("John"));


//IIFE - Immediately Invoked Function Expression
//Function expression that the code inside the function get executed imediately after it has been defined

function x(){

}

// x();

//Syntax of an IIFE

//1.

// function (){
  
// }


//2.

// (function (){
  
// }) // gives a string representation


//3.

(function (){
  console.log('IIFE');
})() // the () at the end executes the function


//Recursion - A function that reffer or calls itself
// when you use recursion makwe sure you hava a base condition
//base condition - under which condition you have to stop recursion

/*
function foo(){
  console.log('foo');
  foo();
}
*/

const foo2 = function buzz(){
  // foo2();
  buzz();
}

//how actually recursion is done
function recurse(){
  if(base_condition){
    //do something
    return;
  }
  recurse();
}

function fetchWater(count){
  if(count === 0){
    console.log('No more water left!');
    return;
  }

  console.log('Fetching water....');
  fetchWater(count -1);
}

fetchWater(5);