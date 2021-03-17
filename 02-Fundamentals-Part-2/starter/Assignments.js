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
console.log(country1, country2, country3);

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




  