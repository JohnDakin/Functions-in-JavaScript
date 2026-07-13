console.log('Higher Order Functions');

function sum(a, b){
  return a + b;
}

sum(2, 3);

const sum1 = function(a, b){
  return a + b;
}

sum1(2, 3);

function getCamera(){
  return "Canon";
}

function getCapture(camera){
  camera();
}

getCapture(function(){
  return "Canon";
});


function returnFunc(){
  return function(){
    console.log('Hi');
  }
}

returnFunc()();

const data = [12, 5, 50];

function incrArr(arr, n){
  let result = [];

  for(const elem of arr){
    result.push(elem + n);
  }

  return result;
}

const result = incrArr(data, 3);

console.log(result);


//Pure Functions - Functions which produce the same output for the same input

function incr(num, pad){
  return num + pad;
}

function decr(num, pad){
  return num - pad;
}

function mul(num, pad){
  return num * pad;
}

//HOF - A function that takes another function as argument or returns another function

function smartOperation(data, op, pad){
  let result = [];

  for(const elem of data){
    result.push(op(elem, pad));
  }

  return result;
}

function div(x, y){
  return x/y;
}


const res = smartOperation(data, decr, 4);
console.log(res);

data.filter(function(elem, index){
  return elem > 10;
});

//Higher Order Function are not same as Callback Function
//Callback functions are the functions that we pass as an argument to another function