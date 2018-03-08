const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Bello it works!');
    reject('Unable to fulfill promise');
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
