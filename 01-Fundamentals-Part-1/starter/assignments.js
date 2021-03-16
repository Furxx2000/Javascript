// Lecture 1. Assignment Values and Variables
const country = 'Taiwan';
const continent = 'Asia';
let population = 23.78;

console.log(country);
console.log(continent);
console.log(population);


// Lecture 2. Data Types

const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Lecture 3. let const and var
language = 'Traditional Chinese';



// Lecture 4. Basic Operator
let averagePopulation = population / 2;
console.log(averagePopulation);
averagePopulation++;
console.log(averagePopulation++);

const FinLand = 6;
console.log(population > FinLand);

const xCountry = 33;
console.log(population < xCountry);

const description =
    country +
    ' is in ' +
    continent +
    ' and its ' +
    population +
    ' million people speak ' +
    language;

console.log(description);

// Coding Challenge 1--------------------------------
// BMI version 1--------------------------
const massOfMark = 78;
const heightOfMark = 1.69;
const massOfJohn = 92;
const heightOfJohn = 1.95;
console.log(massOfMark);
console.log(heightOfMark);
console.log(massOfJohn);
console.log(heightOfJohn);

const BMIOfMark = massOfMark / (heightOfMark ** 2);
const BMIOfJohn = massOfJohn / (heightOfJohn ** 2);
console.log(BMIOfMark);
console.log(BMIOfJohn);

const markHigherBMI = BMIOfMark > BMIOfJohn;
console.log(markHigherBMI);

// BMI version 2-------------------------
const massOfMark2 = 95;
const heightOfMark2 = 1.88;
const massOfJohn2 = 85;
const heightOfJohn2 = 1.76;
console.log(massOfMark2);
console.log(heightOfMark2);
console.log(massOfJohn2);
console.log(heightOfJohn2);

const BMIOfMark2 = massOfMark2 / (heightOfMark2 ** 2);
const BMIOfJohn2 = massOfJohn2 / (heightOfJohn2 ** 2);
console.log(BMIOfMark2);
console.log(BMIOfJohn2);

markHigherBMI2 = BMIOfMark2 > BMIOfJohn2;
console.log(markHigherBMI2);


// Lecture 5. String and Template Literals
const description1 = `${country} is in ${continent} and it's ${population} million people speak ${language}`;
console.log(description1);

//Lecture 6. Taking Decisions: if / else Statements
if (population >= 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// Coding Challenge 2------------------------------------------------------------
if (BMIOfJohn > BMIOfMark) {
    console.log(`John's BMI(${BMIOfJohn}) is higher than Mark's BMI(${BMIOfMark})`);
} else {
    console.log(`Mark's BMI(${BMIOfMark}) is higher than John's BMI(${BMIOfJohn})`)
}

// Lecture 7. Type Cnversion amd Corecion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Lecture 8. Equality Operators
// const numNeighbors = Number(prompt('How many neighbor countries does your country have?'))
// if (numNeighbors === 1) {
//     console.log('Only 1 border')
// } else if (numNeighbors > 1) {
//     console.log('More than one border')
// } else {
//     console.log('No borders')
// }

//Lecture 9. Logical Operators
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} : )`);
} else {
    console.log(`${country} does not meet your criteria : (`);
}

//Coding Challenge 3-----------------------------------------------------------
let averageScoreOfDolphin = (96 + 108 + 89) / 3;
let averageScoreOfKoala = (88 + 91 + 101) / 3;
console.log(averageScoreOfDolphin);
console.log(averageScoreOfKoala);

if (averageScoreOfDolphin > averageScoreOfKoala) {
    console.log(`Dolphin is the winner!🏆 They got ${averageScoreOfDolphin} points`);
} else if (averageScoreOfKoala > averageScoreOfDolphin) {
    console.log(`Koala is the winner!🏆 They got ${averageScoreOfKoala} points`);
} else {
    console.log('Draw');
}

// Test Data Bonus 1
averageScoreOfDolphin = (97 + 112 + 50) / 3;
averageScoreOfKoala = (109 + 95 + 123) / 3;
console.log(averageScoreOfDolphin);
console.log(averageScoreOfKoala);

if ((averageScoreOfDolphin > averageScoreOfKoala) && (averageScoreOfDolphin >= 100)) {
    console.log(`Winner is Dolphin🏆, they got ${averageScoreOfDolphin} points`);
} else if ((averageScoreOfKoala > averageScoreOfDolphin) && (averageScoreOfKoala >= 100)) {
    console.log(`Winner is Koala🏆, they got ${averageScoreOfKoala} points`);
} else {
    console.log(`Draw`);
}

// Test Data Bonus 2
averageScoreOfKoala = (109 + 95 + 50) / 3;
console.log(averageScoreOfKoala);

if ((averageScoreOfDolphin >= averageScoreOfKoala) && (averageScoreOfDolphin >= 100)) {
    console.log(`Winner is Dolphin🏆, they got ${averageScoreOfDolphin} points`);
} else if ((averageScoreOfKoala >= averageScoreOfDolphin) && (averageScoreOfKoala >= 100)) {
    console.log(`Winner is Koala🏆, they got ${averageScoreOfKoala} points`);
} else if ((averageScoreOfDolphin >= 100) && (averageScoreOfKoala >= 100)) {
    console.log('Draw');
} else {
    console.log('No winner😭');
}

//Lecture 10. The switch Statement
language = 'chinese';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too : D');
}

//Lecture 11. The Conditional (Ternary) Operator
const average = population >= 33 ? 'above' : 'below';

console.log(`${country}'s population is ${population >= 33 ? 'above' : 'below'} average`)

//Coding Challenge 4---------------------------------------------------------
const bill = 275;
const tip = bill > 300 || bill < 50 ? 0.2 * bill : 0.15 * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);




