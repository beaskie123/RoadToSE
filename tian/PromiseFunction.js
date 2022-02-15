// let fetch = () => {
//     return new Promise((resolve,reject) => {
//         let data = false
        
//         setTimeout(() =>{
//             data = true
//             resolve(data)
//         })
//     })
// }

// let data = (data) => {
//     console.log("Display: " , data)
// }

// const fetchData = fetch()
// display(fetchData)

let fetch = () => {
    return new Promise((resolve,reject) => {
        let a = 2
        if (a == 2){
            resolve(true)
        }
        else {
            reject(false)
        }
    })
}

fetch().then((fromResolve) => {
    console.log("Success: ", fromResolve)
}) .catch((fromReject) => {
    console.log("Failed:" , fromReject)
})