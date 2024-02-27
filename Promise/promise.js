let getPromise = (dataId) => {
    return new Promise((resolve, reject) => {
        console.log('data', dataId);
        resolve('success');
        // reject('network error');
    })
}

getPromise(1)
   .then((res) => {
      return getPromise(2)
    })
    .then((res) => {
      return getPromise(3);
    })
    .then((res) => {
      console.log(res);
    })


