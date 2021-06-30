'use strict';

/* recieve error message upon submit 
----Activate error class only when the following occurs
----Replace each placeholder text with an empty string except for the email
--Any `input` field is empty. The message for this error 
should say *"[Field Name] cannot be empty"*
 --The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error
should say *"Looks like this is not an email"*
*/



//look into document.forms

const form = document.querySelector('form');

// let loginForm = document.forms.form

// let email = loginForm.elements.email;

const inputs = document.querySelector('input')

// console.log(inputs.textContent)

console.log(document.form.lastName.value)

function valid(){
    
 if(document.form.firstName.value == ""){
     alert("Please provide your name!");
     document.form.firstName.focus();
     return false;
 }
 
 if( document.form.lastName.value == ""){
     console.log('hi');
document.form.lastName.focus();
return false;
 }
 }   




form.addEventListener('submit', function(){
//select the input

//use function to check validity

valid();
})



 





























// Looping through the inputs/make display flex when error occurs
// const form = document.querySelector('form');
// const inputs = document.querySelectorAll('input');
// const submitButton = document.querySelector('button');
// const firstName = document.querySelector('.first-name');
// const lastName = document.querySelector('.last-name');
// const email = document.querySelector('.email');
// const password = document.querySelector('.password');
// const firstNameId = document.getElementById('first-name');
// const lastNameId = document.getElementById('last-name');
// const emailId = document.getElementById('email');
// const passwordId = document.getElementById('password');
// const errorSpan = document.querySelector('.error-span');

//  let newSpan = document.createElement('span');
// const inputs = document.querySelector('input');
//     const checkEmpty = function (input) { //put the id name as the argument
//     if (input.value.length == 0 || input.value == undefined || input.value.trim() == ""){
//     document.getElementById(`${input}`);
//     newSpan.textContent = `${input.} cannot be empty`;
//     console.log(inputs);
//     console.log(newSpan);
//     document.getElementById(`${input}`).appendChild(newSpan);
//     }
//     }

// form.addEventListener('submit', function(){
    
    
    
//     checkEmpty(inputs);

    
// for(let input of inputs){

    //give each span in that section the display of error-span

// if(firstName.value.length == 0){
//     errorSpan.style.display = 'flex'; //try pushing the span into the div if all else fails
// }else if(lastName.value.length == 0) {
//     errorSpan.style.display = 'flex';
// }else if(email.value.length == 0){
//     errorSpan.style.display = 'flex';
// }else if(password.value.length == 0){
//     errorSpan.style.display = 'flex';
//  }
// }

// })


// })




//for loop inside of a submit event listener



/*Adding the error spans/div to the page(set #error-span to flex and 
add the error class to the div)
error-class==> info-section,input-card



*/





/*
<div>

<em><span id="error-span">First Name cannot be empty</span></em>

</div> */