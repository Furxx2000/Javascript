'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // // const private = 534;



// function logger() {
//     console.log('My name is Danny');
// }


// //Calling or running or invoking function
// logger(23);
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // const num = Number('23')

// // Function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // Function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991)

// console.log(age1, age2);

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// // console.log(yearsUntilRetirement(1980, 'Bob'));

// const lifeSchedule = (birthyear, firstName) => {
//     const ageNow = 2021 - birthyear;
//     const retirement = 55 - ageNow;
//     return `${firstName} was born in ${birthyear}, he is ${ageNow} years old now. He wants to retire in ${retirement}`;
// }

// // console.log(lifeSchedule(2004, 'Amy'));

// function cutFruitpieces(fruit) {
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitpieces(apples);
//     const orangePieces = cutFruitpieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
        const age = calcAge(birthYear);
        const retirement = 65 - age;

        if (retirement > 0) {
            return retirement;
            console.log(`${firstName} retires in ${retirement} years`);
        } else {
            return -1;
            console.log(`${firstName} has already retire.`);
        }        
    }

    console.log(yearsUntilRetirement(1991, 'Jonas'));
    console.log(yearsUntilRetirement(1950, 'Mike'));

