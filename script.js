let currentOperand = '0';
let previousOperand = '';
let operation = undefined;

const currentOperandElement = document.getElementById('currentOperand');
const previousOperandElement = document.getElementById('previousOperand');

// Number buttons
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        const number = button.innerText;
        if (currentOperand === '0' && number !== '.') {
            currentOperand = number;
        } else {
            currentOperand += number;
        }
        updateDisplay();
    });
});

// Operation buttons
document.querySelectorAll('[data-operation]').forEach(button => {
    button.addEventListener('click', () => {
        operation = button.innerText;
        previousOperand = currentOperand;
        currentOperand = '0';
        updateDisplay();
    });
});

// Equals button
document.querySelector('[data-equals]').addEventListener('click', () => {
    compute();
    updateDisplay();
});

// Clear button
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
    previousOperandElement.innerText = previousOperand + (operation ? ` ${operation}` : '');
}