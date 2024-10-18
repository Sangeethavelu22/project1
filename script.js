document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerText;

            if (value === 'AC') {
                currentInput = '';
                operator = '';
                firstOperand = '';
                secondOperand = '';
                display.innerText = '0';
            } else if (value === '=') {
                secondOperand = currentInput;
                display.innerText = calculate(firstOperand, secondOperand, operator);
                currentInput = '';
                operator = '';
            } else if (['+', '-', '*', '/', '%', 'x²'].includes(value)) {
                operator = value;
                firstOperand = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(first, second, operator) {
        let result;
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '%':
                result = num1 % num2;
                break;
            case 'x²':
                result = num1 * num1;
                break;
            default:
                result = 'Error';
        }
        return result;
    }
});
