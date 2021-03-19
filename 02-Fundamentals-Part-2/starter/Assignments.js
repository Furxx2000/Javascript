'use strict';

// Lecture 1 Functions
function describeCountry(country, population, capitalcity) {
    const description = `${country} has ${population} million people and its capital city is ${capitalcity}`;
    return description;
}

const countryOne = describeCountry('Taiwan', 23, 'Taipei');
console.log(countryOne);

const countryTwo = describeCountry('Japan', 126, 'Tokyo');
console.log(countryTwo);

const countryThree = describeCountry('China', 1393, 'Beijing')
console.log(countryThree);

// Fuction Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const country1 = percentageOfWorld1(23);
const country2 = percentageOfWorld1(126);
const country3 = percentageOfWorld1(1393);
const countryKorea = percentageOfWorld1(51)
console.log(country1, country2, country3, countryKorea);

const countryTaiwan = function (population) {
    return (population / 7900) * 100;
}
const countryJapan = function (population) {
    return (population / 7900) * 100;
}
const countryChina = function (population) {
    return (population / 7900) * 100;
}

const country4 = countryTaiwan(23);
const country5 = countryJapan(126);
const country6 = countryChina(1393);

console.log(country4, country5, country6);


// Arrow Functions 
const percentageOfWorld3 = population => (population / 7900) * 100;
const country7 = percentageOfWorld3(23);
const country8 = percentageOfWorld3(126);
const country9 = percentageOfWorld3(1393);

console.log(country7);
console.log(country8);
console.log(country9);


// Functions Calling Other Functions


function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population)

    return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

    console.log(describePopulation('China', 1140));
    console.log(describePopulation('Japan', 126));
    console.log(describePopulation('Taiwan', 23));
// 


// First Coding Challenge
const calcAverage = (firstScores, secondScores, thirdScores) => {
    return (firstScores + secondScores + thirdScores) / 3;   
};

console.log(calcAverage(44, 23, 71));
console.log(calcAverage(65, 54, 49));

const avgDolphins = calcAverage(44, 23, 71);
const avgkoalas = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins....');
    }
}

const winner = checkWinner(avgDolphins, avgkoalas);
const winner2 = checkWinner(avgDolphins2, avgKoalas2);


// Introduction ot Arrays
const populations = [23, 126, 1393, 51];
console.log(populations.length === 4);

// 自己解的  ↓
// if (populations.length === 4){
//     console.log('true');
// } else {
//     console.log('false');
// }

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
console.log(percentages); 


//  Basic Array Operations (Methods)
const neighbors =  ['France', 'Germany', 'United Kingdom'];

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country');
}

neighbors[neighbors.indexOf('France')] = 'Republic of France';
console.log(neighbors);



// Coding Challenge #2
const calcTip = function(bill){
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills = [125, 555, 44];
console.log(bills);

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

let total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(total);





 



  