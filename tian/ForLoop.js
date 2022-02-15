// "data" (variable) = ["ako","si", "bea","andrea"] (value)
//const * for constant or specific variable/data 
//let * restore temporary data ("temp") to concutinate data in the variable
//global ("temp") and private variable ("x")
const data = ["ako","si", "bea","andrea"]
let temp= ""
// Syntax-- for(counter;condition-1(*for Unidentified);terminal loop)
// We always asign TEMPORARY VARIABLE "temp" for counter to return a value
for(x=0; x<=data.length-1; x++)
{
    temp += data[x]
    console.log("index:" + x + " value of: " + temp)
}
// Assignment: OUTPUT : "si" "andrea"