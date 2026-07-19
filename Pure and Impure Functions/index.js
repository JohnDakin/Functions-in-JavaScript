//A pure function is a function which when given an argument will always produce the same output for the same input

//Pure Functions
function multiply(numberOne, numberTwo){
  return numberOne * numberTwo;
}

console.log(multiply(1, 2));
console.log(multiply(3, 4));

//Impure Functions produces different output for same input thus it is unpredictable
// Function is considered impure if it changes something outside the function thus it introduces side effects

//Impure Functions
function randomize(numberOne, numbers){
  return Math.random(Math.floor(numberOne)) * numbers.length;
}

console.log('First Invocation',randomize(3, [3, 4, 5, 6]));
console.log('Second Invocation',randomize(3, [3, 4, 5, 6]));

let isEven = false;

function impureEvenVariant(number){
  if(number % 2 === 0){
    isEven = true; //side effect
  }

  return isEven;
}

console.log(impureEvenVariant(5)); //false
console.log(impureEvenVariant(6)); //true
console.log(impureEvenVariant(5)); //true (incorrect)

function pureEvenVariant(number){
  let isEven = false; //local
  if(number % 2 === 0){
    isEven = true;
  }

  return isEven;
}

console.log(pureEvenVariant(5)); //false
console.log(pureEvenVariant(6)); //true
console.log(pureEvenVariant(5)); //false