import './main.scss';

const A = new Promise((resolve, reject) => {
  resolve("success")
  reject(new Error('failed'))
})

A.then(function() {
    console.log('then', ...arguments)
})

A.catch(function() {
    console.log('catch', ...arguments)
})

const B = new Map()
