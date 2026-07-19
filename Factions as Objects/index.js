//Objects are reffered to as first class citizen in JavaScript because they can be:
// 1.Stored in Variable
// 2.Passed to Functions
// 3.Returned from Functions

/*
function exmp(car){
  console.log(car);
}

let c1 = {
  name: "BMW",
  cost: 75.6,
  mileage: 8.9
};

exmp(c1);
console.log(c1);

*/

/*
function exmp(){
    let c1 = {
      name: "BMW",
      cost: 75.6,
      mileage: 8.9
    };
    return c1;
}

console.log(exmp());
*/

//Functions in JavaScript are also first class citizens
// ie Functions in  JS === Objects
/*
function add(a, b){
  console.log(a + b);
}

add(10, 20);
console.log(add.name);
console.log(add.length);

add.call();
*/

//Function collecting another Function is called a HOF - Higher Order Function
function exmp(fun){
  fun(100, 200);
}

//Function being passed to another function as input is called a callback function
function add(a, b){
  console.log(a + b);
}

exmp(add);
add(100, 200);

// add(10, 20);

// let add2;
// add2 = add;

// add2(100, 200);