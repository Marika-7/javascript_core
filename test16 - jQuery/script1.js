'use strict';

$(function() {
    $('.ball').click(function() {
        $(this).animate({
            width: Math.round(Math.random() * 300) + 20,
            height: Math.round(Math.random() * 300) + 20,
            backgroundColor: 
                `rgb(${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)}, 
                ${Math.round(Math.random() * 255)})`,
            top: Math.round(Math.random() * (innerHeight - 300)),
            left: Math.round(Math.random() * (innerWidth - 300)),
        }, 5000, 'easeInOutBack');
    });
});
