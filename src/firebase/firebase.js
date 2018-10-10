import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleAuthProvider, database as default}
























// // database.ref('expenses')
// //     .on('child_changed',
// //         (snapshot) => console.log(snapshot.val()))

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.val())
// })
// // database.ref('expenses').on('child_removed',(snapshot) => {
// //     console.log(snapshot.key, snapshot.val())
// // })

// // database.ref('expenses')
// //     .once('value', (snapshot) => {
// //         const expenses = []

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //               id: childSnapshot.key,
// //               ...childSnapshot.val()
// //             })
// //         })

// //         console.log(expenses)
// //     }, (e) => {

// //     })


// // database.ref('expenses').on('value',(snapshot) => {
// //     const expenses = []

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })

// //     console.log(expenses)
// // }, (e) => {
// //     console.log(e)
// // })


// // database.ref('expenses').push({
// //     description: 'Bla bla bla',
// //     'note': 'Nope)',
// //     amount: 15.00,
// //     createdAt: 0
// // })

// // database.ref('notes/-LOEMV8j5H4Q172fhNIQ').remove()
// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React Native, Angular, Python'
// // })

// // database.ref().set({
// //     name: 'Philip',
// //     age: 18,
// //     single: true,
// //     stressLevel: 5,
// //     job: {
// //         title: 'Software dev',
// //         company: 'Amazon'
// //     },
// //     location: {
// //         city: 'Zp',
// //         country: 'UK'
// //     },
// // }).then(() => {
// //     console.log('data is saved')
// // }).catch((e) => {
// //     console.log('Error: This is failed', e)
// // })

// // const onDataChange = database.ref()
// //     .on('value', (snapshot) => {
// //         const val = snapshot.val()

// //         console.log(`${val.name} works on ${val.job.company} as ${val.job.title}`)
// //     }, (e) => {
// //         console.log('Error: ', e)
// //     })

// // setTimeout(() => {
// //     database.ref().update({
// //         'job/company': 'Google',
// //         age: 41,
// //         name: 'A new Andrew'
// //     })
// // }, 1000)

// // database.ref('location/country')
// //     .once('value')
// //     .then((snap) => {
// //         const val = snap.val()
// //         console.log(val)
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data ', e)
// //     })

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // }).then(()=> {
// //     console.log('Promise!!')
// // })
// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('isSingle was removed')
// //     }).catch((e) => {
// //         console.log(e)
// //     })
