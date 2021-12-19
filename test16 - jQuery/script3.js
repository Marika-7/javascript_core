'use strict';

$(function(){
    let koord;
    // show modal
    $('.box').on('click', function(){
        koord = $(this).position();
        $(this).css('opacity', 0);
        $('.modal_container').show();
        $('.modal').show();
        $('.modal').css({
            top: koord.top,
            left: koord.left,
            backgroundColor: $(this).css('background-color')
        });
        $('.modal_container').animate({
            opacity: 0.8
        }, 800, 'linear');
        $('.modal').animate({
            width: '400px',
            height: '400px',
            top: (window.innerHeight - 400) / 2,
            left: (window.innerWidth - 400) / 2
        }, 1000, 'easeInCubic');
    });
    // hide modal
    $('.modal').on('click', function(){
        $(this).animate({
            width: '150px',
            height: '150px',
            top: koord.top,
            left: koord.left
        }, 1000, 'easeOutCirc', function(){
            $('.modal_container').animate({
                opacity: 0
            }, 400, 'easeInQuad', function(){
                $('.modal').hide();
                $('.modal_container').hide();
                $('.box').css('opacity', 1);
            });
        });
    });
});
