let text = '';
let shift = 0;
let caps = 0;
let arr1 = [12, 17, 18, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92, 93, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145];
let arr2 = [8, 9, 13, 16, 32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222];
let arr3 = []

window.addEventListener('keydown', function(event) {
    if(arr1.includes(event.keyCode)) {
        if(event.code.includes('Numpad')) {
            event.preventDefault();
        }
        return;
    }
    if(event.code == 'NumpadEnter') {
        event.preventDefault();
        return;
    }

    event.preventDefault();
    if(arr2.includes(event.keyCode)) {
        document.getElementById(event.code).classList.add('active');
    }
    switch(event.code){
        case 'Backquote':
            text += shift ? '~' : '`';
            break;
        case 'Digit1':
            text += shift ? '!' : '1';
            break;
        case 'Digit2':
            text += shift ? '@' : '2';
            break;
        case 'Digit3':
            text += shift ? '#' : '3';
            break;
        case 'Digit4':
            text += shift ? '$' : '4';
            break;
        case 'Digit5':
            text += shift ? '%' : '5';
            break;
        case 'Digit6':
            text += shift ? '^' : '6';
            break;
        case 'Digit7':
            text += shift ? '&' : '7';
            break;
        case 'Digit8':
            text += shift ? '*' : '8';
            break;
        case 'Digit9':
            text += shift ? '(' : '9';
            break;
        case 'Digit0':
            text += shift ? ')' : '0';
            break;
        case 'Minus':
            text += shift ? '_' : '-';
            break;
        case 'Equal':
            text += shift ? '+' : '=';
            break;
        case 'Backspace':
            text = text.slice(0, text.length-1);
            break;
        case 'Tab':
            text += '\t';
            break;
        case 'KeyQ':
            text += caps - shift ? 'Q' : 'q';
            break;
        case 'KeyW':
            text += caps - shift ? 'W' : 'w';
            break;
        case 'KeyE':
            text += caps - shift ? 'E' : 'e';
            break;
        case 'KeyR':
            text += caps - shift ? 'R' : 'r';
            break;
        case 'KeyT':
            text += caps - shift ? 'T' : 't';
            break;
        case 'KeyY':
            text += caps - shift ? 'Y' : 'y';
            break;
        case 'KeyU':
            text += caps - shift ? 'U' : 'u';
            break;
        case 'KeyI':
            text += caps - shift ? 'I' : 'i';
            break;
        case 'KeyO':
            text += caps - shift ? 'O' : 'o';
            break;
        case 'KeyP':
            text += caps - shift ? 'P' : 'p';
            break;
        case 'BracketLeft':
            text += shift ? '{' : '[';
            break;
        case 'BracketRight':
            text += shift ? '}' : ']';
            break;
        case 'Backslash':
            text += shift ? '|' : '\\';
            break;
        case 'CapsLock':
            caps = caps ? 0 :1;
            document.getElementById('CapsLock').classList.toggle('active');
            break;
        case 'KeyA':
            text += caps - shift ? 'A' : 'a';
            break;
        case 'KeyS':
            text += caps - shift ? 'S' : 's';
            break;
        case 'KeyD':
            text += caps - shift ? 'D' : 'd';
            break;
        case 'KeyF':
            text += caps - shift ? 'F' : 'f';
            break;
        case 'KeyG':
            text += caps - shift ? 'G' : 'g';
            break;
        case 'KeyH':
            text += caps - shift ? 'H' : 'h';
            break;
        case 'KeyJ':
            text += caps - shift ? 'J' : 'j';
            break;
        case 'KeyK':
            text += caps - shift ? 'K' : 'k';
            break;
        case 'KeyL':
            text += caps - shift ? 'L' : 'l';
            break;
        case 'Semicolon':
            text += shift ? ':' : ';';
            break;
        case 'Quote':
            text += shift ? '"' : "'";
            break;
        case 'Enter':
            text += '\n';
            break;
        case 'ShiftLeft':
        case 'ShiftRight':
            shift = 1;
            break;
        case 'KeyZ':
            text += caps - shift ? 'Z' : 'z';
            break;
        case 'KeyX':
            text += caps - shift ? 'X' : 'x';
            break;
        case 'KeyC':
            text += caps - shift ? 'C' : 'c';
            break;
        case 'KeyV':
            text += caps - shift ? 'V' : 'v';
            break;
        case 'KeyB':
            text += caps - shift ? 'B' : 'b';
            break;
        case 'KeyN':
            text += caps - shift ? 'N' : 'n';
            break;
        case 'KeyM':
            text += caps - shift ? 'M' : 'm';
            break;
        case 'Comma':
            text += shift ? '<' : ',';
            break;
        case 'Period':
            text += shift ? '>' : '.';
            break;
        case 'Slash':
            text += shift ? '?' : '/';
            break;
        case 'Space':
            text += ' ';
            break;
        default:
            break;
    }
    document.getElementById('myTextarea').value = text;
})

window.addEventListener('keyup', function(event) {
    if(arr1.includes(event.keyCode) || event.code == 'NumpadEnter') {
        return;
    }
    if(arr2.includes(event.keyCode)) {
        document.getElementById(event.code).classList.remove('active');
    }
    if(event.key == 'Shift')
    shift = 0;
})
