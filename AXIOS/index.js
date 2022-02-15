// axios({
//     url:'https://jsonplaceholder.typicode.com/posts',
//     method:'Get'
// })
// .then(result => {
//     console.log("success: " , result.data[0])
// }).catch(fromReject => {
//     console.log("failed: " , fromReject)
// })

// Async || await
//Scoping of declared VAriable = Global and Local

console.log("bea")
const data = async () => { //const data -Global variable

    const result = await axios({  // const result - Local Variable
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'Get'
        
        })
        
        console.log(result.data[0])
}

data()

//PROMISE .then || .catch || === async () await ()
// WHAT IS API - shared data in different application (facebook -> Twitter -> messenger)
//JSON OBJECT - { key:value}
// // "object1 ": 
// {
//     name:
// }
//METHOD
   //get method - kukuha ka ng data 
   //post method - dadagdag ng data
   //put method - edit ng data
   //patch method- advance way ng edit (put) || sabihin mo lang yung key mababago nya lahat ng  data
   //delete method - magdedelete ng data
//AUTHORAZATION LETTER - for security
//HEADER - pang configure ng security sa authorazation


// let displayName = async () => {
//     return new Promise((resolve) => {
//         setTimeout (() => {
//             resolve("Bea")
//         }, 3000)
       
//     })
// }
// console.log(await displayName())

// let displayAge = async () => {
//     return new Promise((resolve) => {
//         setTimeout (() => {
//             resolve(23)
//         }, 5000)
       
//     })
// }
// console.log(await displayAge())

// let displayGender = async () => {
//     return new Promise((resolve) => {
//         setTimeout (() => {
//             resolve("female")
//         }, 7000)
//     })
// }
// console.log(await displayGender())
// // displayName().then((name1) => {
// //     console.log(name1)
// // })
// // displayAge().then((Age1) => {
// //     console.log(Age1)
// // })
// // displayGender().then((Gender1) =>{
// //     console.log(Gender1)
// // })

// displayName()
// displayAge()
// displayGender()

