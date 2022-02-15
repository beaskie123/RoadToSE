const nameInput = document.querySelector(`#name`)
const ageInput =document.querySelector(`#Age`)
const alertName = () => {
    alert("Your name is: " + nameInput.value)
    alert("your Age is: " + ageInput.value)
}

const submitButton = document.querySelector('#submit1')
// const price1 = document.querySelector('#price1')
// const price2 = document.querySelector('#price2')
// const price3 = document.querySelector('#price3')
// const price4 = document.querySelector('#price4')
const price1 = document.querySelectorAll('.price')
const totalamount = document.querySelector(`#total`) 



submitButton.addEventListener('click', () => { //(e)
    // let sum = 0
    // sum = Number(price1.value) + Number(price2.value) +Number(price3.value)+ Number(price4.value)
    // totalamount.value= sum
    let sum= 0
    for(let i = 0; i<price1.length;i++)
{
    sum += Number(price1[i].value)
}

totalamount.value = sum

})