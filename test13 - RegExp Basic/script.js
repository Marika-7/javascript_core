'use strict';

// get form
let form1 = document.forms.form;

// functions for text fields
for(let i=0; i<4; i++) {
    form1[i].addEventListener('input', changeField);
    form1[i].addEventListener('input', checkField);
    form1[i].addEventListener('focus', focusField);
    form1[i].addEventListener('blur', blurField);
}

function changeField(event) {
    event.target.classList.add('form__input_write');
    event.target.previousElementSibling.classList.add('form__span_write');
}

// check input field
let regExpName = /^[a-zA-Z]{2,20}$/;
let regExpEmail =/^[a-z0-9_\-.]+@[a-z]+\.[a-z.]+$/;
let regExpPassword =/^\w{8,15}$/;

function checkField(event) {
    let regExp = event.target.id == 'email' ? regExpEmail :
        event.target.id == 'password' ? regExpPassword : regExpName;
    if(regExp.test(event.target.value)) {
        event.target.nextElementSibling.classList.add('hide');
        event.target.parentElement.classList.remove('warning');
        event.target.parentElement.classList.add('success');
    }
    else {
        event.target.nextElementSibling.classList.remove('hide');
        event.target.parentElement.classList.remove('success');
        event.target.parentElement.classList.add('warning');
    }
    // checkButton();
}

// focus function
function focusField (event) {
    event.target.classList.remove('success2');
    event.target.classList.remove('warning2');
}

// blur function
function blurField (event) {
    let regExp = event.target.id == 'email' ? regExpEmail :
        event.target.id == 'password' ? regExpPassword : regExpName;
    if(regExp.test(event.target.value)) {
        event.target.classList.add('success2');
    }
    else {
        event.target.classList.add('warning2');
    }
    checkButton();
}

// checkbox
form1.check.addEventListener('click', function() {
    checkButton();
})

// button
function checkButton() {
    if(form1.fname.classList.contains('success2') && form1.lname.classList.contains('success2') &&
        form1.email.classList.contains('success2') && form1.password.classList.contains('success2') && 
        form1.check.checked) {
            form1.signup.classList.remove('disabled');
            form1.signup.disabled = false;
    }
    else {
        form1.signup.classList.add('disabled');
        form1.signup.disabled = true;
    }
}

form1.signup.addEventListener('click', function(event) {
    document.querySelector('.shadow').classList.remove('hide');
    event.preventDefault();
})

// great button click
document.querySelector('.great__button').addEventListener('click', function() {
    for(let i=0; i<4; i++) {
        form1[i].value = '';
        form1[i].classList.remove('success2');
        form1[i].parentElement.classList.remove('success');
        form1[i].classList.remove('form__input_write');
        form1[i].previousElementSibling.classList.remove('form__span_write');
    }
    form1.check.checked = false;
    form1.signup.classList.add('disabled');
    form1.signup.disabled = true;
    document.querySelector('.shadow').classList.add('hide');
})
