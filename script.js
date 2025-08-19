let num = document.querySelectorAll('.num');
let display = document.querySelector('.displayInput');

num.forEach((button) => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    }); // Append number to display
});
let Delete = document.querySelector('.delete');
Delete.addEventListener('click', () => {
    display.value = display.value.slice(0, -1); // Remove the last character from the display
});
let Clear = document.querySelector('.clear');
Clear.addEventListener('click', () => {
    display.value = ''; // Clear the display    
});
let operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    }); // Append operator to display
});
let enter = document.querySelector('.enter'); // Calculate the value
enter.addEventListener('click', () => {
    display.value = eval(display.value);
    if (display.value === 'Infinity' || display.value === 'NaN') {
        display.value = 'Error'; // Handle division by zero or invalid operations
    }
    if (display.value === '') {
        display.value = '0';
    } // Ensure display is not empty
});
