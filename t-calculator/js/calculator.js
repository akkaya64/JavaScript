let currentInput = "";
let currentOperator = null;
let firstOperand = null;

function number(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}

function operator(operator) {
    if (currentInput === '') return;
    if (firstOperand !== null) equal();
    currentOperator = operator;
    firstOperand = currentInput;
    currentInput = "";
}

function equal() {
    if (firstOperand === null || currentOperator === null) return;
    let result;
    const a = parseFloat(firstOperand);
    const b = parseFloat(currentInput);
    switch (currentOperator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                alert("You can't divide to 0!");
                clearAll();
                return;
            }
            result = a / b;
            break;
    }
    currentInput = result.toString();
    firstOperand = null;
    currentOperator = null;
    updateDisplay();
}

function clearAll() {
    currentInput = "";
    currentOperator = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('input').value = currentInput;
}