'use strict';

/* recieve error message upon submit 
----Activate error class only when the following occurs
----Replace each placeholder text with an empty string except for the email
--Any `input` field is empty. The message for this error 
should say *"[Field Name] cannot be empty"*
 --The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error
should say *"Looks like this is not an email"*
*/

// Looping through the inputs/adding a span element when the error occurs
const input = document.querySelectorAll('input');


//for loop inside of a submit event listener



// Adding the error spans/div to the page
/*
<div>

<em><span id="error-span">First Name cannot be empty</span></em>

</div>
*/