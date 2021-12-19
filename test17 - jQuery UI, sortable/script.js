'use strict';

$(function () {
    // set sortable
    $('.game__cell').sortable({
        connectWith: '.game__cell',
        containment: '.game',
        cursor: "move",
        scroll: false,
        start: function (event, ui) {
            time == 61 ? $('#btn_start').trigger('click') : 0;
        },
        over: function (event, ui) {
            $(this).addClass('hover');
        },
        out: function (event, ui) {
            $(this).removeClass('hover');
        },
        receive: function (event, ui) {
            if ($(this).attr('value') == 'fill') {
                checkCell = 1;
            }
            else {
                $(this).attr('value', 'fill');
                checkCell = 0;
            }
        },
        stop: function (event, ui) {
            if (checkCell) {
                $(this).sortable('cancel');
            }
            else {
                $(this).removeAttr('value');
            }
        },
    });

    // variables
    let time = 61;
    let timer;
    let checkCell = 1;

    // beginning
    fillField();

    // onclick functions
    // for btn of window
    $('#btn_start').click(() => {
        time = 60;
        $('#btn_start').attr('disabled', true);
        $('#btn_result').removeAttr('disabled');
        timer = setInterval(timerStart, 1000);
    });
    $('#btn_result').click(() => {
        clearInterval(timer);
        $('#modalTime').text(time > 9 ? `00:${time}` : `00:0${time}`);
        modalOpen(1);
    });
    $('#btn_new').click(() => {
        $('#btn_start').removeAttr('disabled');
        $('.clock__timer').text('01:00');
        fillField();
    });
    // for btn of modal
    $('#btn_closeSure').click(() => {
        timer = setInterval(timerStart, 1000);
        modalClose(1);
    });
    $('#btn_check').click(() => gameCheck() == 16 ?  modalChange(1) :  modalChange(0));
    $('#btn_closeLose').click(() => modalClose(2));
    $('#btn_closeWin').click(() => modalClose(3));

    // functions
    // fillField()
    function fillField() {
        let check = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let position;
        for(let i = 0; i < 16; i++) {
            $('#gameStart>.game__cell').attr('value', 'fill');
            $('#gameEnd>.game__cell').removeAttr('value');
            do {
                position = Math.round(Math.random() * 15);
            }
            while (check[position]);
            $(`.game__item:eq(${i})`).attr('value', `${position + 1}`);
            $(`#gameStart>.game__cell:eq(${i})`).append($(`.game__item:eq(${i})`));
            check[position] = 1;
        }
        $('.game__item').css('background-image', "url('./images/dnd.png')")
    }
    // timerStart()
    function timerStart() {
        $('.clock__timer').text(--time > 9 ? `00:${time}` : `00:0${time}`);
        if(!time) {
            clearInterval(timer);
            gameCheck() == 16 ?  modalOpen(3) :  modalOpen(2);
        }
    }
    // gameCheck()
    function gameCheck() {
        time = 61;
        let checkResult = 0;
        for(let i = 0; i < 16; i++) {
            ($(`#gameEnd>.game__cell:eq(${i})>.game__item`).attr('value') == i + 1) ? checkResult++ : 0;
        }
        $('#btn_result').attr('disabled', true);
        return checkResult;
    }
    
    // modal windows - show & hide
    function modalOpen(num) {
        let modalWindow = num == 1 ? '#modalSure' :
            num == 2 ? '#modalLose' :
            '#modalWin';
        $('.modal').fadeIn(300);
        $(`${modalWindow}`).show();
        $(`${modalWindow}`).animate({
            marginTop: '50px'
        }, 300);
    }
    function modalChange(num) {
        $('#modalSure').hide();
        num ? $('#modalWin').css('margin-top', '50px') : $('#modalLose').css('margin-top', '50px');
        num ? $('#modalWin').show() : $('#modalLose').show();
    }
    function modalClose(num) {
        let modalWindow = num == 1 ? '#modalSure' :
            num == 2 ? '#modalLose' :
            '#modalWin';
        $(`${modalWindow}`).animate({
            marginTop: '0px'
        }, 300).fadeOut();
        $('.modal').fadeOut(300);
    }
});
