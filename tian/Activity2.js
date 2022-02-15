// let a = 0;
// for (var i = 0; i <=10; i++)
// {
//     a = a+i
// }

// console.log(a)

// console.log("==================")

// let temp=30;
// for (var b = 1; b<= 30; b++)
// {   
//     if(b%2==0) //modulo operator
//     {
//         console.log(b)
//     }
// }

// console.log("==================")

var rows = 5;
let temp = " "

for (i = 0 ;i <= rows; i++)
{
    temp = ""
    for( space = rows - i ; space>= 1; space--)
    {
        temp += " "
    }
for (var z = i ; z >= 1; z--)
// nagprprint kung ilang beses magrerepeat yung output per line
//unang loop di nag miminus
//value ni z is 2 ; 2 >= 1 (true) ; 2--(1)
//value na ni z is 1; 1>=1(true);1--(0)
//   22
{
    temp += i.toString ()

    // z = 4
    // c =  3
    for (c = z-1; c >= 1 ; c--){
        //value ni c is 2-1(1);1>=1(true);1--
        //
        
        if(c==1){
            console.log(z)
            temp += c.toString();
        } 
        
        
    }
}
console.log(temp)
}
