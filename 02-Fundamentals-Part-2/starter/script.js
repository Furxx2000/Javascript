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

// // console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//         const age = calcAge(birthYear);
//         const retirement = 65 - age;

//         if (retirement > 0) {
//             console.log(`${firstName} retires in ${retirement} years`);
//             return retirement;
//         } else {
//             console.log(`${firstName} has already retire.`);
//             return -1;
//         }        
//     }

//     console.log(yearsUntilRetirement(1991, 'Jonas'));
//     console.log(yearsUntilRetirement(1950, 'Mike'));

// // function calcAge(birthYear){
// //     return 2037 -birthYear;
// // }

// // const calcAge = function(birthYear){
// //     return 2037 - birthYear;
// // }

// // const calcAge = birthYear => 2037 - birthYear;

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 1967, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1990, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])]
// console.log(ages);

// Add Elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay'); // add to the last one
console.log(friends);
console.log(newLength);

friends.unshift('John');// Add to the first one
console.log(friends);

// Remove Elements
friends.pop();// kick out last one
const popped = friends.pop(); // capture the value which was kicked out 
console.log(popped);
console.log(friends);

friends.shift();// Remove the first one
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
