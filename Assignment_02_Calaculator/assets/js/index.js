document.addEventListener('DOMContentLoaded', function () {
    const inputArea = document.querySelector('.input');
    const outputArea = document.querySelector('.output');
    let input = '';
    let operatorUsed = '';
    let operand1 = '';
    let operand2 = '';
    let lastResult = ''; // Variable to store the last result

    const buttons = document.querySelectorAll('.calc-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('number')) {
                handleNumber(value);
            } else if (button.classList.contains('sign')) {
                handleOperator(value);
            } else if (button.classList.contains('equals')) {
                handleEquals();
            } else if (button.classList.contains('double')) {
                handleClear();
            }
        });
    });

    function handleNumber(number) {
        input += number;
        updateInputArea();
    }

    function handleOperator(operator) {
        if (input !== '') {
            operand1 = input;
        } else if (lastResult !== '') {
            operand1 = lastResult; // Use the last result as operand1 if input is empty
        }
        input = '';
        operatorUsed = operator;
        updateInputArea();
    }

    function handleEquals() {
        if (operand1 !== '' && operatorUsed !== '' && input !== '') {
            operand2 = input;
            const result = calculate(operand1, operand2, operatorUsed);
            outputArea.textContent = result;
            lastResult = result.toString(); // Store the result as a string
            resetCalculator();
        }
    }

    let handleClear = () => {
        resetCalculator();
        updateInputArea();
        outputArea.textContent = '';
        lastResult = ''; // Clear the last result when the calculator is cleared
    }

    function resetCalculator() {
        input = '';
        operatorUsed = '';
        operand1 = '';
        operand2 = '';
    }

    function updateInputArea() {
        inputArea.textContent = operand1 + ' ' + operatorUsed + ' ' + input;
    }

    function calculate(operand1, operand2, operator) {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '×':
                return num1 * num2;
            case '÷':
                return num1 / num2;
            default:
                return '';
        }
    }
});
// toggle 