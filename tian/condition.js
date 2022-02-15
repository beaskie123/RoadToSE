const animal = "pusa"
let description = "panget"
let name = "kid"
/* Conditional == & !=  */
const isTrue = name != "kid" ? "YES" : "NO"
console.log(isTrue)  

/* Conditional || && < > <=  >= */

const number =[1,2,3,4,5,6,8]
const age = 2

if ( ( number[1] == 3) || (number [1] == 11 ))
{
    console.log(name)
}

else if ( (number[1] != 4 && number[1] != 3))
{
    console.log("wala sa nabanggit")
}

else {
    console.log("kid lang pogi")
}
 
/* Calc */

const val1 = 2
const val2 = 5
const index = 0
const operation = ["Sum","Mul","Subtract","Div"]

if (operation[index] == "Sum")
{
    //  console.log((val1+val2)) 
     console.log(`total:${val1+val2}`)
}

else if (operation[index] == "Mul")
{
    console.log((val1*val2))
}

else if (operation[index] == "Subtract")
{
    console.log((val1-val2))
}
else if (operation[index] == "Div")
{
    console.log((val1/val2))
}

else {
    console.log("Invlaid operator")
}


