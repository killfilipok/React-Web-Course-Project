// const person = {
//     name: 'Phil',
//     age: 18,
//     location: {
//         city: 'ZP',
//         temp: ' 9'
//     }
// }

// const {age, 'name': firstName = 'Anonymous'} = person

// console.log(`${firstName} is ${age}.`)

// const {'temp': temperature, city} = person.location

// if(city && temperature){
//     console.log(`Its ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { 'name': publisherName = 'Self-publisher' } = book.publisher

// console.log(publisherName)


//Array distruct

// const address = ['1299 S Juniper Street','Philadelphia','memLand','5588']

// const [, city, state = 'NewYork'] = address

// console.log(`You are in ${city} ${state}`)

// const item = ['Coffee (hot)','$2.00','$2.75','$3.75']
// const [itemName,,midCost] = item


// console.log(`A ${itemName} costs ${midCost}`)