// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// What is amplitude? Answer: difference between highest and lowest temp
// How to compute max and min temp?
// What's a sensor error? And what to do?

// 2. Breaking-up into sub-problems
// How to ignore errors?
// Find max value in temp array.
// Find min value in temp array.
// Subtract min from max(amplitude) and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};
calcTempAmplitude([3, 7, 5]);
