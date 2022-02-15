//

const obj = [{Name: "Bea", Age: 23 , Gender:"Female" , Details: "Noob" } , 
            {Name: "Peter", Age: 23 , Gender:"Male" , Details: "POGI Lang"},
            {Name: "Kid", Age: 1 , Gender:"Male" , Details: "Alalay si Peter"} ]

obj.forEach(hey =>{
    if (hey.Name == "Peter"){
    
    console.log(`Kamusta ako si ${hey.Name} , ako ay ${hey.Age} na gulang, Ako Ay isang ${hey.Gender}, at ako ay ${hey.Details}`)
}
    else 
    {
        console.log(`Hi my Name is ${hey.Name} , My Age is ${hey.Age}, My Gender is ${hey.Gender}, And I am ${hey.Details}`)
     }
}
    
    )