'use strict';

/* recieve error message upon submit 
----Activate error class only when the following occurs
----Replace each placeholder text with an empty string except for the email
--Any `input` field is empty. The message for this error 
should say *"[Field Name] cannot be empty"*
 --The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error
should say *"Looks like this is not an email"*
*/



// select elements

const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');


function setErrorFor(input,message){
const formControl = input.parentElement;
const small = formControl.querySelector('small');

//add error message inside small
small.innerText = message;

//add error class
formControl.className = 'form-control error';
}


function resetForm(input){
    const formControl = input.parentElement;
    //remove error class
    formControl.className = 'form-control';
    }

function validEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);    
}


 function checkInputs(){
    // get values from inputs
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
   const emailValue =  email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === ''){
        setErrorFor(firstName,'First Name cannot be empty')
    }
    else{
       resetForm(firstName); 
    }

    if(lastNameValue === ''){
        setErrorFor(lastName,'Last Name cannot be empty');
    }else{
        resetForm(lastName);
    }

    if(emailValue === ''){
        setErrorFor(email,'Email cannot be empty');
    }else if(!validEmail(emailValue)){
        setErrorFor(email,'Looks like this is not an email!');
    }else{
        resetForm(email);
    }

    if(passwordValue === ''){
        setErrorFor(password,'Password cannot be empty');
    }else{
        resetForm(password);
    }
}
 




form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs();

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