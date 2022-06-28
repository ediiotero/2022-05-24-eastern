// Make a loop that console.log even numbers from 1-10

// alert(firstName + " hungry? " + isHungry)
// var age = prompt("What is your age?")
// var firstName = prompt("What is your name?")
// var isHungry = confirm("Are your hungry?");

// console.log(age);
// console.log(isHungry);

// for(var i = 1; i <= 5; i++) {
//     console.log(i)
// }

// =========================================
// if(age >=15 && age <=18 ) {
//     alert('you can take your driving test')
// } else if( age > 18){
//     alert('you can drive')
// }else {
//     alert("you can't drive")
// }

// switch(true) {
//     case age >=15 && age <=18:
//         alert('you can take your driving test')
//         break;
//     case age > 18:
//         alert('you can drive')
//         break;
//     default:
//         alert("you can't drive")
// }

// ===========================================
// var question =  confirm("Would you like to start?");
// var list = [];

// while(list.length < 3 && question === true) {
//     alert("starting app");
//     var colorQuestion = prompt("Give me a color");
//     list.push(colorQuestion);

//     if(list.length === 3){
//         console.log(list)
//     }
// }
 
// ==================================
// var count = 0;

// do {
//     count++
//     console.log(count)
// } while(count <= 3)

// =====================================

for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0){
        console.log(i)
    }
}