const obj = {
name: "bea" , 
age: 23
}

delete obj.age
console.log(obj.age)
const con =[1,2,3,4,5]

con.push("no") // adding new value to array s dulo
con.pop() //nagtatanggal ng last value sa array
con.unshift('peter') //nagdadagdag ng value sa unahan ng array
console.log(con)

// IMPLEMENTATION OF FUNCTION IN Java
function run (sum){
    return `${sum} is running`
}

const a = run("peter")

console.log(a)
//
const run2 = function (sum2)
{
    console.log(`${sum2} is running`)
    return `${sum2} is running`
}
run2("bea")

//ES2020 (Function) ECMASCRIPT

const run3 =(name) =>
{
    return `${name} is running`
}
console.log(run3("kid"))

//ES6 Object FUnction

let obj1= {
name : "Bea" ,
Age: 23
}
console.log(Object.keys(obj1)) //object.keys = kinikuha yung keys ng object
console.log(Object.values(obj1)) //Object.values - kinukuha yung mga values lang
console.log(Object.entries(obj1)) // Object.entries - kinukuha yung keys and value (Array)
console.log(Object.assign(obj1, {Gender: "Female"})) // Object.assign - nagdadagdag ng bagong keys and value sa array || magrereplace ng value pag nadeclare na

//Spread Operators
let objA ={
    name: "bea",
    age:23
}

let objB ={...objA} //... nag spread ng value lang ng kinokopya hindi yung mismong object
console.log(objB)
let objC ={...objA, gender: "Female"} // Syntax kung paano magdagdag ng value sa loob ng Spread operators|| Same lang kay object assign
console.log(objC)

let con1 ={ name: "bea"}
let con2 ={Age:23}
let con3 ={Gender:"babae"}
let con4 = {...con1,...con2,...con3} //pagsasama ng lahat ng value na gusto mo kuhain gamit spread operators
console.log(con4)

// DESTRUCTURE
let V ={
    name5:"peter",
    Age5:23 ,
    Gender:"Lalake"
}

const { name5,Age5} = V
console.log(name5)
console.log(Age5)
//shortcut para sa pagkuha or pag assign ng object


//LOOP
let w = {
    Name: "baby",
    Age:42,
    Gender:"BABAE"
}

//First option FOR EACH
Object.keys(w).forEach(key => {
    // console.log(`${key}:` , w[key])
    console.log( key +":" , w[key] )
} )

// Second option FOR LOOP

for( let i = 0; i < Object.keys(w).lenght; i++)
{
console.log(w[Object.keys(w)[i]])
}

//3rd Option FOR IN
let wKeys = Object.keys(w)
for(const i in wKeys){
    console.log(w[wKeys[i]])
}

//4th OPTION FOR OFF
//Direct na pagkuha ng value
let wKeys2 = Object.keys(w)
for (const val of wKeys2){
    console.log(`${val}: `, w[val])
}

// 5th option ENTRIES

let wKeys3 = Object.entries(w)
for (const [key , val2] of wKeys3){
    console.log(`${key} | `, val2)
}