//syntax(initializer;condition;incrementor)

// for (i = 0; i<=10; i+=2)
// {
//     console.log(i)
// }

var total = 0; //Collector
for (var num= 0;num <11;num++){
    total = total +num;
}

console.log("total = " +total)

console.log ("=================")

var fruits=["mango", "banana" , "apple","cherry"];

for(var i =0 ; i<fruits.length; i++)
{
    console.log(fruits[i])
}

console.log ("=================")

var data = {
    name: "peter",
    age: 30 , 
    maritalStatus: true
}
for (var i in data) {
console.log(i , data[i])
}

console.log ("=================")

const num = 10

for(i=num;i>=0;i--)
{
    if(i%2 == 0)
    console.log(i)
}
