'use strict';

let form1 = document.forms['f1'];
let userBlock = document.querySelector('.userBlock').children;

form1.fname.addEventListener('blur', function(){
    userBlock[1].textContent = form1.fname.value + ' ' + form1.sname.value;
})

form1.sname.addEventListener('blur', function(){
    userBlock[1].textContent = form1.fname.value + ' ' + form1.sname.value;
})

form1.email.addEventListener('blur', function(){
    userBlock[2].textContent = form1.email.value;
})

form1.sex.addEventListener('click', function(event){
    if(event.target.type === 'radio') {
        let photo = (event.target.value === 'woman') ? 'woman.png' : 'man.png';
        userBlock[0].setAttribute('src', `./images/${photo}`);
    }
})

form1.position.addEventListener('change', function(event){
    userBlock[3].textContent = form1.position.value;
})

form1.agree.addEventListener('click', function(){
    if(form1.agree.checked) {
        form1.signUp.style.backgroundColor = '#1d8433';
    }
    else {
        form1.signUp.style.backgroundColor = '#72c486';
    }
})

form1.signUp.addEventListener('click', function(event){
    if(! form1.agree.checked) {
        return;
    }
    if(form1.position.value === '') {
        form1.position.focus();
        return;
    }
    document.querySelector('.block1').style.display = 'none';
    document.querySelector('.block2').style.display = 'block';
    event.preventDefault();
})
