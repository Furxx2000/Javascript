'use strict';
// // ----------------------Default Parameters-------------------------
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //     ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// -------------------First-Class and Higher-Order Functions--------------------

// //  ----------------How Passing Arguments Works: Values vs References-----------------
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// //--------------------Functions Accepting Callback Functions--------------------
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-Order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('🖐');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// // Example
// const digitSpace = function (str) {
//   const TransformedStr = str.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
//   return TransformedStr;
// };

// const transformerDigitSpace = function (str, fn) {
//   console.log(`My credit card number is: ${fn(str)}`);
// };

// transformerDigitSpace('1529628745984632', digitSpace);

// ----------------------Functions Returning Functions---------------------
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// // ---------------------------The Call and Apply Method--------------------------
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call Method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply method(but nobody use this anymore)
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // Call method with spread operator(better way)
// book.call(swiss, ...flightData);

// // -------------------------The bind Method----------------------------
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// // Challenge - use callback function instead of bind
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// // ------------------------Coding Challenge 1-----------------------------
// // -------Danny's solution-------
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const newArr = [this.question, ...this.options]
//       .toString()
//       .replaceAll(',', '\n');

//     let input = prompt(`${newArr}\n(Write option number)`);
//     console.log(input);

//     if (parseInt(input) < this.answers.length) {
//       this.answers[input]++;
//     } else {
//       console.log('Please select the right answer.');
//     }

//     displayResults(this.answers);
//     displayResults(this.answers.join(', '));
//   },
// };

// const answerPollBtn = document.querySelector('.poll');
// const registerNewAnswer = poll.registerNewAnswer;

// // answerPollBtn.addEventListener('click', registerNewAnswer.bind(poll));

// const displayResults = function (type) {
//   if (typeof type === 'string') {
//     console.log(`Poll results are ${type}`);
//   } else if (Array.isArray(type)) {
//     console.log(type);
//   }
// };

// const data1 = [5, 2, 3];
// const data2 = [1, 5, 3, 9, 6, 1].join(', ');

// displayResults(data1);
// displayResults(data2);

// // ------Teacher's solution-------
// const poll2 = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults2();
//     this.displayResults2('string');
//   },
//   displayResults2(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// answerPollBtn.addEventListener('click', poll2.registerNewAnswer.bind(poll2));

// poll2.displayResults2.call({ answers: [5, 2, 3] }, 'string');
// poll2.displayResults2.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll2.displayResults2.call({ answers: [1, 5, 3, 9, 6, 1] });

// // ------------------Immediately Invoked Function Expressions(IIFE)--------------------
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('This will never run again');
// })();

// // Arrow IIFE

// (() => console.log('This will alson never run again'))();

// // ----------------------------Closures--------------------------------
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// // -------------------------More Closures Examples--------------------------
// // Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 5);

// // -------------------------Coding Challenge 2 ---------------------------
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   window.document.querySelector('body').addEventListener('click', () => {
//     header.style.color = 'blue';
//   });
// })();

