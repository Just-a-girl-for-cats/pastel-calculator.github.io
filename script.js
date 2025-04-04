let currentOperand = '0';
let previousOperand = '';
let operation = undefined;

const currentOperandElement = document.getElementById('currentOperand');
const previousOperandElement = document.getElementById('previousOperand');

document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        const number = button.innerText;
        if (number === '.' && currentOperand.includes('.')) return;
        if (currentOperand === '0' && number !== '.') {
            currentOperand = number;
        } else {
            currentOperand += number;
        }
        updateDisplay();
    });
});

document.querySelectorAll('[data-operation]').forEach(button => {
    button.addEventListener('click', () => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = button.innerText;
        previousOperand = currentOperand;
        currentOperand = '';
        updateDisplay();
    });
});

document.querySelector('[data-equals]').addEventListener('click', () => {
    compute();
    updateDisplay();
});

document.querySelector('[data-all-clear]').addEventListener('click', () => {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
});

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    if (isNaN(prev) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '÷':
            computation = prev / current;
            break;
        default:
            return;
    }
    
    currentOperand = computation.toString();
    operation = undefined;
}

function updateDisplay() {
    currentOperandElement.innerText = currentOperand;
    if (operation) {
        previousOperandElement.innerText = `${previousOperand} ${operation}`;
    } else {
        previousOperandElement.innerText = previousOperand;
    }
}
