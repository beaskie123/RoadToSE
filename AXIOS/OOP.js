// let name1 = 'bea'
// console.log(name1.toUpperCase()) //Uppercase sa String

// //Object Literals
// const people = {
// Name:" Bea Andrea Caballero",
// Age: 23,
// Gender:'Female'
// }

// console.log(Object.values(people)) // value ng object ['BeaAndrea caballero',23, 'Female']
// console.log(Object.keys(people)) //keys ng object [Name, Age , Gender]

// const people2 = {
//     Name:" Peter Christian Magalong",
//     Age: 23,
//     Gender:'Male'
//     }


        //ES5 Constructor
 function People(Name , Age , Gender){
     this.Name = Name
     this.Age = Age
     this.Gender = Gender

    // this.getInfo = function() {
    //     return `${this.Name} is a ${this.Gender} and ${this.Age} years old`
    // }
    }

                //creating PROTOTYPE

People.prototype.getInfo = function (){
    return `${this.Name} is a ${this.Gender} and ${this.Age} years old`
}
 const people = new People ('Juan Dela Cruz', 30 , "Male")
 const people2 = new People ('Bea Andrea Caballero',23,'Female')

    console.log(people)
    // console.log(people2.getInfo())

    //inheritance

    function Students (Name, Age Gender, YearEnrolled){

        people.call(this, Name, Age , Gender);
        this.year = YearEnrolled;
    }

// encapsulation 
// get () access
// set () modify

// inheritance

// parent 
// child