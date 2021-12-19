const getS = selector => document.querySelector(selector);

// edit text
getS('.btn-edit').onclick = function() {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
}

getS('.btn-save').onclick = function() {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}

// set style of text
getS('.btn-style').onclick = function() {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
}

// set size of text
getS('.form-size').onclick = function() {
    if(event.target.type === 'radio') {
        getS('.top-block').style.fontSize = event.target.value;
    }
}

// set font family
getS('#fontFamily').onchange = function() {
    getS('.top-block').style.fontFamily = this.value;
    // getS('.disabled').setAttribute('disabled', 'true');
    getS('.disabled').disabled = true;
}

// set color of text and background
let colors = ['#dc3545', '#007bff', '#28a745', '#343a40', '#ffc107', '#e83e8c', '#f8f9fa', '#6f42c1', '#17a2b8'];
let text_bg = 0;

for (let i = 0; i < getS('.colors').children.length; i++) {
    getS('.colors').children[i].style.backgroundColor = colors[i];
    getS('.colors').children[i].onclick = function(){
        if(text_bg) {
            getS('.top-block').style.color = this.style.backgroundColor;
        }
        else {
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
        }
        getS('.colors').classList.add('hide')
    }
}

getS('.btn-text-color').onclick = function() {
    getS('.colors').classList.remove('hide');
    text_bg = 1;
}

getS('.btn-bg-color').onclick = function() {
    getS('.colors').classList.remove('hide');
    text_bg = 0;
}

// set bold style
getS('#style-bold').onclick = function() {
    event.target.checked ? 
    getS('.top-block').classList.add('bold') : 
    getS('.top-block').classList.remove('bold');
}

// set italic style
getS('#style-italic').onclick = function() {
    event.target.checked ? 
    getS('.top-block').classList.add('italic') : 
    getS('.top-block').classList.remove('italic');
}

// add table
getS('.btn-add').onclick = function() {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

getS('#radio-table').onclick = function() {
    getS('.create-table').classList.remove('hide');
    getS('.create-list').classList.add('hide');
}

// create table
const table = document.forms['form-table'];

getS('.btn-create-table').onclick = function() {
    const countTr = table.countTr.value;
    const countTd = table.countTd.value;
    const widthTd = table.widthTd.value;
    const heightTd = table.heightTd.value;
    const borderWidth = table.borderWidth.value;
    const borderType = table.borderType.value;
    const borderColor = table.borderColor.value;
    getS('.edit-area').value += `<table style="border-spading: 0; border-collapse: collapse">\n`;
    for(let i=0; i<countTr; i++) {
        getS('.edit-area').value += `\t<tr>\n`;
        for(let j=0; j<countTd; j++) {
            getS('.edit-area').value += `\t\t<td style="width: ${widthTd}px; height: ${heightTd}px; border: ${borderWidth}px ${borderType} ${borderColor}">TD</td>\n`;
        }
        getS('.edit-area').value += `\t</tr>\n`;
    }
    getS('.edit-area').value += `\t</table>\n`;
    
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    getS('.create-table').classList.add('hide');
}

// add list
getS('#radio-list').onclick = function() {
    getS('.create-list').classList.remove('hide');
    getS('.create-table').classList.add('hide');
}

// create list
const list = document.forms['form-list'];

getS('.btn-create-list').onclick = function() {
    const countLi = list.countLi.value;
    const typeLi = list.typeLi.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">\n`;
    for(let i=0; i<countLi; i++){
        getS('.edit-area').value += `\t<li>item ${i+1}</li>\n`;
    }
    getS('.edit-area').value += '</ul>\n';

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
    getS('.create-list').classList.add('hide');
}
