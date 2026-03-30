const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {   
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function  deleteLast() {
     display.value = display.value.slice(0,- 1);
}
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;       
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (value === '⌫') {
            deleteLast();
        } else {
            appendToDisplay(value);
        }   
    });
});
