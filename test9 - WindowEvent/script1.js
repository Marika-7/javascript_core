'use strict';

let scrollOne = () => document.querySelector('.down').style.fontSize = `${30 + window.scrollY / 12}px`;
let scrollTwo = () => document.querySelector('.block2').style.paddingLeft = `${80 + (window.scrollY - 600) / 5}px`;
let scrollThree = () => document.querySelector('.block2>hr').style.width = `${240 + (window.scrollY - 600) * 0.35}px`;
let scrollFour = () => document.querySelector('.block2').style.paddingRight = `${80 + (window.scrollY - 1000) / 2.5}px`;
let scrollFive = () => document.querySelector('.up').style.fontSize = `${100 - (window.scrollY - 1200) / 10}px`;

window.addEventListener('scroll', function(){
    switch(true){
        case (window.scrollY <= 600):
            scrollOne();
            break;
        case (window.scrollY <= 1000):
            scrollTwo();
            scrollThree();
            break;
        case (window.scrollY <= 1200):
            scrollFour();
            break;
        case (window.scrollY <= 1700):
            scrollFive();
            break;
    }
})

document.querySelector('.down').addEventListener('click', () => {
    window.scroll({
        top: 940,
        behavior: 'smooth'
    })
})

document.querySelector('.up').addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
    window.location.reload();
})
