const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Bello it works!');
//     reject('Unable to fulfill promise');
//   }, 2500);
// });

// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });

asyncAdd(3, '5').then((result) => {
  console.log('Result: ', result);
  return asyncAdd(result, 23);
}).then((result) => {
  console.log('Should be 31', result);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

asyncAdd('hi', 17).then((result) => {
  console.log('Result: ', result);
}, (errorMessage) => {
  console.log(errorMessage);
});
