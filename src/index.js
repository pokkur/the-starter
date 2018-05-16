import './main.css';

const A = new Promise(function (resolve, reject) {
    resolve('success');
    reject('reject');
});

A.then(function () {
    console.log('then', ...arguments);
});

A.catch(function () {
    console.log('catch', ...arguments);
});

const B = new Map();
