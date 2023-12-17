const display = document.querySelector('.display');
const display__content = document.querySelector('.display__content');
const numberBtn = document.querySelectorAll('.keypad__key.num');
const operatorBtn = document.querySelectorAll('.keypad__key.operator');
const equalBtn = document.querySelector('.keypad__key.equal');
const clearBtn = document.querySelector('.keypad__key.clear');

let prevValue = 0;
let operation = '';
let currentValue = 0;

numberBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        if (display__content.textContent === '0' || display__content.textContent === '+' || display__content.textContent === '-' || display__content.textContent === '*' || display__content.textContent === '/') {
            display__content.textContent = '';
        }
        display__content.textContent += e.target.textContent;
    });
});

operatorBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.textContent) {
            case '+':
                prevValue = display__content.textContent;
                operation = '+';
                display__content.textContent = '+';
                console.log(prevValue);
                break;
            case '-':
                prevValue = display__content.textContent;
                operation = '-';
                display__content.textContent = '-';
                console.log(prevValue);

                break;
            case '*':
                prevValue = display__content.textContent;
                operation = '*';
                display__content.textContent = '*';
                console.log(prevValue);

                break;
            case '/':
                prevValue = display__content.textContent;
                operation = '/';
                display__content.textContent = '/';
                console.log(prevValue);
                break;
        }
    });
});

equalBtn.addEventListener('click', () => {
    switch (operation) {
        case '+':
            currentValue = parseFloat(prevValue) + parseFloat(display__content.textContent);
            display__content.textContent = currentValue;
            break;
        case '-':
            currentValue = parseFloat(prevValue) - parseFloat(display__content.textContent);
            display__content.textContent = currentValue;
            break;
        case '*':
            currentValue = parseFloat(prevValue) * parseFloat(display__content.textContent);
            display__content.textContent = currentValue;
            break;
        case '/':
            currentValue = parseFloat(prevValue) / parseFloat(display__content.textContent);
            display__content.textContent = currentValue;
            break;
    }
});

clearBtn.addEventListener('click', () => {
    display__content.textContent = '0';
});

