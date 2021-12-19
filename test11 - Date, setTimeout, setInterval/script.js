'use strict';

// get selector
const getS = selector => document.querySelector(selector);

// set date and time
const addTime = (num) => num < 10 ? `0${num}` : `${num}`;

function setTime() {
    let time = new Date;
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
let sw = new Date(0, 0, 0, 0, 0, 0, 0);
console.log(sw);
getS('.stopwatch-time').textContent = 
    addTime(sw.getHours()) + ':' + addTime(sw.getMinutes()) + ':' + 
    addTime(sw.getSeconds()) + ':' + addTime(sw.getMilliseconds());

// forms.stopwatch.start.onclick = function() {}
// forms.stopwatch.loop.onclick = function() {}
// forms.stopwatch.stop.onclick = function() {}
// forms.stopwatch.reset.onclick = function() {}

// set timer
// forms.setTimer.plus.onclick = function() {}
// forms.setTimer.minus.onclick = function() {}

// timer
// forms.timer.start.onclick = function() {}
// forms.timer.stop.onclick = function() {}
// forms.timer.reset.onclick = function() {}

// getS('.');
// console.log(forms.stopwatch.start);