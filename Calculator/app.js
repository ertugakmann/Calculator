const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const x = document.querySelector('#x');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');

const boxContent = document.querySelector('#boxContent');
let currentContent = '';


function runEventListeners() {
    zero.addEventListener('click', toUI);
    one.addEventListener('click', toUI);
    two.addEventListener('click', toUI);
    three.addEventListener('click', toUI);
    four.addEventListener('click', toUI);
    five.addEventListener('click', toUI);
    six.addEventListener('click', toUI);
    seven.addEventListener('click', toUI);
    eight.addEventListener('click', toUI);
    nine.addEventListener('click', toUI);
    dot.addEventListener('click', toUI);
    minus.addEventListener('click', mathOp);
    plus.addEventListener('click', mathOp);
    x.addEventListener('click', mathOp);
    equal.addEventListener('click', equalOp);
}

runEventListeners();

function toUI(e) {
    const clickedButton = e.target;
    const innerValue = clickedButton.innerHTML;
    currentContent += innerValue;
    boxContent.innerHTML = currentContent;
    e.preventDefault();
}

function clearContent() {
    currentContent = '';
    boxContent.innerHTML = '';
}

function mathOp(e) {
    localStorage.setItem(`numbers`, boxContent.innerHTML);
    clearContent();
}

function equalOp() {
    const storageNumber = parseInt(localStorage.numbers);
    const contentNumber = parseInt(boxContent.innerHTML);
    const sonuc = storageNumber + contentNumber;
    boxContent.innerHTML = sonuc;
}