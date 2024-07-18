function mockFunction (shouldResolve) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(shouldResolve){
                resolve('Promise resolved successfully!');
            } else {
                reject('Promise rejected with an error!');
            }
        },1000);    
    });
}

mockFunction(true)
    .then((result) => {
        console.log(result);
        return mockFunction(false);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Promise chain completed');
    });