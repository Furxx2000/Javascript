// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1. Understanding the problem
// // What is amplitude? Answer: difference between highest and lowest temp
// // How to compute max and min temp?
// // What's a sensor error? And what to do?

// // 2. Breaking-up into sub-problems
// // How to ignore errors?
// // Find max value in temp array.
// // Find min value in temp array.
// // Subtract min from max(amplitude) and return it.

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmplitude([3, 7, 5, 23]);
// calcTempAmplitude(temperatures);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // Problem 2
// //Function should now receive 2 arrays of temps

// // 1. Understanding the problem
// //  - With 2 arrays, should we implent two functionality twice? NO! Just merge two arrays.

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmplitudeNew([3, 7, 5, 23]);
// calcTempAmplitudeNew(temperatures);
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// // console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C FIX
//     value: Number(prompt('Degrees celsius')),
//   };

//   // B FIND
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //  A. IDENTIFY
// console.log(measureKelvin());

// Coding Challenge
// 1. Understanding your problems
// Array transformed to string, seperated by....
// What is the X days? Answer: index + 1

// 2.Break up into sub-problems
// transform array into string
// Transform each element to string with
// Strings needs to contain day (index + 1)
// Add ..... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days .... `;
  }
  console.log('....' + str);
};
printForecast(data1);
printForecast(data2);
