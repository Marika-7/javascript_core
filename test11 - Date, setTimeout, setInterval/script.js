'use strict';

// get selector
const getS = selector => document.querySelector(selector);

// format time to string
const addTime = (num) => num < 10 ? `0${num}` : `${num}`;
const addMs = (num) => num < 10 ? `00${num}` : num < 100 ? `0${num}` : `${num}`;

// set date and time
function setTime() {
    let time = new Date();
    getS('.date').textContent = 
        addTime(time.getDate()) + '.' + addTime(time.getMonth()+1) + '.' + addTime(time.getFullYear());
    getS('.time').textContent = 
        addTime(time.getHours()) + ':' + addTime(time.getMinutes()) + ':' + addTime(time.getSeconds());
}

setTime();
setInterval(setTime, 1000);

//  get forms
const forms = document.forms;

// onclick functions for buttons
// stopwatch
let swStart;
let swEnd;
let swResult = 0;
let swPausa = 0;
let swIntervalID;

forms.stopwatch.start.onclick = function() {
    forms.stopwatch.start.disabled = true;
    swStart = new Date().getTime();
    swIntervalID = setInterval(stopwatch, 1);
}

// start of stopwatch
function stopwatch() {
    swEnd = new Date().getTime();
    swResult = swEnd - swStart + swPausa;
    let hh = Math.floor((swResult % (1000 * 60 * 60 * 24 ))/(1000 * 60 * 60));
    let mm = Math.floor((swResult % (1000 * 60 * 60 ))/(1000 * 60));
    let ss = Math.floor((swResult % (1000 * 60 ))/1000);
    let ms = Math.floor(swResult % 1000);
    getS('.stopwatch__time').textContent = 
        addTime(hh) + ':' + addTime(mm) + ':' + addTime(ss) + ':' + addMs(ms);
}

//  pausa of stopwatch

forms.stopwatch.stop.onclick = function() {
    swPausa = swResult;
    clearInterval(swIntervalID);
    forms.stopwatch.start.disabled = false;
}

//  save stopwatch
forms.stopwatch.loop.onclick = function() {
    let pp = document.createElement('p');
    pp.textContent = getS('.stopwatch__time').textContent;
    getS('.save').append(pp);
}

// clear stopwatch
forms.stopwatch.reset.onclick = function() {
    getS('.stopwatch__time').textContent = '00:00:00:000';
    swPausa = 0;
    let aa = getS('.save').children;
    for( let i=aa.length-1; i>=0; i--) {
        aa[i].remove();
    }
}

// timer
let tStart;
let tEnd;
let tPausa = 0;
let tResult = 0;
let tIntervalID;
let tSet = 1;
let tTime = +getS('.setTimer__time').textContent;

// set timer
forms.setTimer.plus.onclick = function() {
    getS('.setTimer__time').textContent = ++tTime;
    tSet = 1;
    tResult= 0;
    stopTimer();
}

forms.setTimer.minus.onclick = function() {
    getS('.setTimer__time').textContent = tTime <= 0 ? 0 : --tTime;
    tSet = 1;
    tResult = 0;
    stopTimer();
}

// start of timer
forms.timer.start.onclick = function() {
    tResult = tPausa ? tPausa : tTime * 60 * 1000;
    if(!tPausa || tSet) {
        getS('.timer__time').textContent = addTime(tTime) + ':00';
        tPausa = tResult;
        tSet = 0;
    }
    tStart = new Date().getTime();
    tIntervalID = setInterval(timer, 1000);
    forms.timer.start.disabled = true;
}

function timer () {
    tEnd = new Date().getTime();
    tResult = tPausa - (tEnd - tStart);
    console.log(tResult);
    let mm = Math.floor((tResult % (1000 * 60 * 60 ))/(1000 * 60));
    let ss = Math.floor((tResult % (1000 * 60 ))/1000);
    getS('.timer__time').textContent = addTime(mm) + ':' + addTime(ss);
    if(tResult <= 0) {
        stopTimer();
        getS('.timer__time').textContent = '00:00';
    }
}

// pausa of timer
forms.timer.stop.addEventListener('click', stopTimer);

function stopTimer() {
    clearInterval(tIntervalID);
    tPausa = tResult;
    forms.timer.start.disabled = false;
}

//  clear timer
forms.timer.reset.onclick = function() {
    stopTimer();
    tResult = tPausa = 0;
    getS('.timer__time').textContent = '00:00';
}
