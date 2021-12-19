'use strict';

$(function() {
// start
    let div = document.createElement('div');
    $('body').css('background-color', 'black')
    $('body').prepend(div);
    $('div').addClass('ball');
    $('.ball').css({
        width: Math.round(Math.random() * 200) + 20,
        height: Math.round(Math.random() * 200) + 20,
        border: `4px solid 
        rgb(${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)}, 
        ${Math.round(Math.random() * 255)})`,
        'border-radius': '50%',
        backgroundColor: 
            `rgb(${Math.round(Math.random() * 255)}, 
            ${Math.round(Math.random() * 255)}, 
            ${Math.round(Math.random() * 255)})`,
        'box-shadow': `0px 0px 30px 20px 
            rgba(${Math.round(Math.random() * 255)}, 
            ${Math.round(Math.random() * 255)}, 
            ${Math.round(Math.random() * 255)}, 0.5)`,
        position: 'absolute',
        top: Math.round(Math.random() * (innerHeight - 300)),
        left: Math.round(Math.random() * (innerWidth - 300))
    });
// animation
    diskoBall();
    setInterval(diskoBall, 1000);
    function diskoBall() {
        $('.ball').animate({
            width: Math.round(Math.random() * 200) + 20,
            height: Math.round(Math.random() * 200) + 20,
            top: Math.round(Math.random() * (innerHeight - 300)),
            left: Math.round(Math.random() * (innerWidth - 300)),
            borderColor: 
                `rgb(${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)})`,
            backgroundColor:
                 `rgb(${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)})`,
        }, 1000, 'easeOutExpo');
        $('.ball').css({
            'box-shadow': `0px 0px 30px 20px 
                rgba(${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)}, 0.5)`
        })
    }
});
