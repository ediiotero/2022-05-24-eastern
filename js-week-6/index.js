// Write a class called Temperature that will take fahrenheit as a property this will be a number
// the number should be between 212 and -459.67
// Temperature should have 2 methods one for converting fahrenheit to celsius
// and another to convert celsius to kelvin
// create 2 new object with this class


class Temperature {
    constructor(fahrenheit) {
        if(fahrenheit <= 212 && fahrenheit >= -459.67){
            this.fahrenheit = fahrenheit
        } else {
            console.error(`${fahrenheit} is not a valid fahrenheit temperature`);
        }
    }

    celsius() {
        const fahrenheitInC = ((this.fahrenheit - 32)*5)/9;
        return fahrenheitInC;
    }

    kelvin() {
        const celsius = this.celsius();
        return celsius + 273.15;
    }
}

// const temp1 = new Temperature(80)
// console.log(temp1)
// console.log(temp1.celsius().toFixed(2))
// console.log(temp1.kelvin().toFixed(2))

const players = ['Eddie', 'Adam', 'Jennifer', 'Stephanie', 'Cody']
const positions = ['captain', 'guard', 'forward', 'center']

const teams = [];

positions.forEach(position => {
    players.map(player => teams.push({player, position}))
})

console.log(teams)

function shuffle(array) {
    const teamOne = [];
    const teamTwo = [];

    while(array.length > 0){
        const random1 = Math.floor(Math.random() * array.length);
        const getItem1 = array.splice(random1,1);
        const random2 = Math.floor(Math.random() * array.length);
        const getItem2 = array.splice(random2,1);
        teamOne.push(getItem1);
        teamTwo.push(getItem2);
    }

    return [teamOne.flat(), teamTwo.flat()]
}

console.log(shuffle(teams))


