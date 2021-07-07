# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](/images/intro-screenshot.png)

### Links

- Solution URL: https://github.com/tdr3215/intro-component.git
- Live Site URL: https://tdr3215.github.io/intro-component/

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Native JavaScript

git st
### What I learned

```html -- learning the small element
    <em><small class="error-small" >Error Message</small></em></div>
```
```css--learning box-shadows
.trial-card {
  height: 80px;
  box-shadow: 0px 8px 0px 0px rgba(5, 4, 4, 0.16);
  text-align: center;
}
```
```js -- learning email validation function
function validEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);    
}
```

### Continued development

I really enjoyed doing this project. I got stuck for a little while when trying to figure out email validation and I would like to work harder on learning other CSS properties like Grid or using a framework like bootstrap or SASS the next time I create a new project. 


### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS) - I often used MDN to help understand concepts I either did not know or needed a refresher on. This is a go to resource of mine whether it be for HTML,CSS or Javascript.
- [Example resource 2](http://git-scm.com/docs) - Git is an amazing version control system and I often referred to the docs to commit, merge, and push changes to and from my github account.


## Author

- Website - [Tiffany Rose](https://tdr3215.github.io/my-portfolio-2021/)
- Frontend Mentor - [@tdr3215](https://www.frontendmentor.io/profile/tdr3215)
- LinkedIn - (https://www.linkedin.com/in/tiffany-rose-80b344123/)

