'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);

    return res.json();
  });
};

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   });
// };

// getCountryData('taiwan');
// getCountryData('usa');
// getCountryData('germany');
// getCountryData('china');

// --------------------------------------Callback Hell------------------------------------

// const getCountryAndNeighbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbor country
//     const [neighbor] = data.borders;

//     if (!neighbor) return;
//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbor('portugal');
// getCountryAndNeighbor('usa');

// --------------------------------Promises and The Fetch API------------------------------
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// --------------------------------Consuming Promises---------------------------------
// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(res => {
//     if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);

//     return res.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(res => {
//       console.log(res);

//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders[0];
//       const neighbour = 'dsadasd';

//       if (!neighbour) return;

//       //   Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`${err}💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       //   Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`${err}💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('taiwan');

// ---------------------------------Chaining Promises---------------------------------
// -------------------------------Throwing Errors Manually-----------------------------
// -----------------------------Coding Challenge 1----------------------------------
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💢💢`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// -----------------------------The Event Loop in Practices----------------------------
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolve promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

// --------------------------------Building a Simple Promise---------------------------
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('YOU WIN 💰');
//     } else {
//       reject(new Error('You lost your money💥'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).then(x => console.error(x));

// ----------------------------Promisifying the Geolocation API------------------------

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💢💢`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', whereAmI);

// --------------------------------Coding Challenge 2----------------------------------

const images = document.querySelector('.images');
let currentImg;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImg = document.createElement('img');
    newImg.src = imgPath;

    // Load function means the loading is successful.
    newImg.addEventListener('load', function () {
      images.append(newImg);
      resolve(newImg);
    });

    // Error function means that there is an error.
    newImg.addEventListener('error', function () {
      reject(new Error('Image not found!'));
    });
  });
};

// createImage('/img/img-1.jpg')
//   .then(res => {
//     currentImg = res;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return wait(2);
//   })
//   .then(() => {
//     createImage('/img/img-2.jpg').then(res => (currentImg = res));
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// ------------------------Consuming Promises with Async/Await-------------------------

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res =>
// //   console.log(res)
// // );

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');

//     const dataGeo = await resGeo.json();

//     // Country data

//     const res = await fetch(
//       `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(`${err}💥`);
//     renderError(`💥 ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);
// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message}💥`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     err => console.error(`2: ${err.message}💥`);
//   }

//   console.log('3: Finished getting location');
// })();

// --------------------------Error Handling with Try....Catch--------------------------
// --------------------------Running Promises in Parallel------------------------------
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c1}`
//     // );
//     // const [data2] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c2}`
//     // );
//     // const [data3] = await getJSON(
//     //   `https://restcountries.eu/rest/v2/name/${c3}`
//     // );

//     const data = await Promise.all([
//       getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//       getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('taiwan', 'japan', 'korea');

// ----------------Other Promise Combinators: race, allSettled and any-----------------
// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.eu/rest/v2/name/taiwan`),
//     getJSON(`https://restcountries.eu/rest/v2/name/japan`),
//     getJSON(`https://restcountries.eu/rest/v2/name/korea`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.eu/rest/v2/name/korea`),
//   timeout(0.45),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// // Promise.allSettled [ES2020]
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Promise.any [ES2021]
// Promise.any([
//   Promise.reject('ERROR'),
//   Promise.resolve('Success'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// ------------------------------Coding Challenge 3----------------------------------

// // Part 1
// const loadNPause = async function () {
//   try {
//     // Load image 1
//     await wait(2);
//     let img = await createImage('/img/img-1.jpg');
//     await wait(2);
//     img.style.display = 'none';

//     // Load image 2
//     await wait(2);
//     img = await createImage('/img/img-2.jpg');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(img => createImage(img));
    Promise.all(imgs).then(res => {
      res.forEach(img => img.classList.add('parallel'));
      console.log(res);
    });
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
