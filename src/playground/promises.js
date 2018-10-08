const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'philip',
            age: 18
        })

        // reject('something went wrong')
    }, 1500)
})

console.log('before')


promise.then((data) => {
    console.log('data: ', data)
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise')
        }, 1500)
    })
}).then((data) => {
    console.log('data?: ', data)
}).catch((error) => {
    console.log('error: ', error)
})

console.log('after')