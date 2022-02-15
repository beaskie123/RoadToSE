const human =
{
    // Syntax||(Key:Value)
    name: " Bea Andrea",
    color: "fair",
    Age: 23,
    isRegistered: true,
    // Array is considered as Object with value
    abilities:["masarap","hot","sexy","yummy"],
    gender:{isMale:false, isFemale:true}
}

const gender = human.gender.isFemale ? "babae " : "lalake "

console.log(gender + human.abilities + " si " + human.name)
// Syntax error: (Forgot ,)
console.log("type of" , typeof human.gender)