console.log('Callback');

function foo(bar){
  bar();
}

foo(function (){
  console.log('bar');
});

//Robin's Phone
orderPizza('veg', 'Cheese Barbeque', function(msg){
  console.log(msg);
});

// Pizzahub end
function orderPizza(type, name, callback){
  console.log(`Pizza ${type} ${name} is ordered`);
  
  setTimeout(function (){
    const msg = `Pizza ${type} ${name} is ready`;
    callback(msg);
  },3000);
}

