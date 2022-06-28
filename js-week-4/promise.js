// Callbacks

function display(some) {
    console.log(some)
}
  
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

// myCalculator(5, 5, display);


// Promise
// more here: https://www.w3schools.com/js/js_promise.asp

function myDisplayer(some) {
    console.log(some)
}
  
let myPromise = new Promise(function(myResolve, myReject) {
let x = 0;

// The producing code (this may take some time)

if (x === 0) {
  
    myResolve("OK");
} else {
    myReject("Error");
}
});

// myPromise.then(
// function(value) {myDisplayer(value);},
// function(error) {myDisplayer(error);}
// );


let nextPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love JavaScript !!"); }, 3000);
  });
  
//   nextPromise.then(function(value) {
//     console.log(value)
//   });

// ========================

// Fetch Api 

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))