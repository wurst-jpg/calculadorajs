let currentInput = ''; // Número que el usuario está ingresando
let firstOperand = null; // Primer número para operaciones binarias
let currentOperator = null; // Operador seleccionado (+, -, *, etc.)
let previousInput = ''; // Para mostrar la operación en la pantalla

// Actualiza el display de la calculadora
function updateDisplay(value) {
    document.getElementById('display').value = value;
}

// Agrega un número al display
function appendNumber(number) {
    currentInput += number; // Concatenar número al input actual
    previousInput += number; // Muestra el número ingresado en el display
    updateDisplay(previousInput); // Actualiza el display
}

// Establece el operador y guarda el primer número
function setOperator(operator) {
    if (currentInput === '') return; // Si no hay input, no hace nada
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput); // Guarda el primer número
    } else if (currentOperator) {
        calculate(); // Calcula si ya había un operador pendiente
    }
    currentOperator = operator; // Guarda el operador seleccionado
    previousInput += ' ' + operator + ' '; // Muestra el operador en la pantalla
    currentInput = ''; // Limpia el input actual
    updateDisplay(previousInput); // Actualiza el display
}

// Realiza el cálculo de acuerdo al operador
function calculate() {
    if (currentOperator === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput); // Segundo número
    let result;

    switch (currentOperator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                updateDisplay("Error: Div 0");
                resetCalculation();
                return;
            }
            result = firstOperand / secondOperand;
            break;
        case '^':
            result = Math.pow(firstOperand, secondOperand);
            break;
    }

    firstOperand = result; // El resultado se convierte en el primer operando
    currentInput = ''; // Limpia el input actual
    currentOperator = null; // Limpia el operador
    previousInput += ' = ' + result; // Muestra el resultado en pantalla
    updateDisplay(previousInput); // Muestra la operación completa y el resultado
}

// Función para limpiar el display
function clearDisplay() {
    resetCalculation();
    updateDisplay('0');
}

// Función para calcular el factorial de un número
function calculateFactorial() {
    let num = parseInt(currentInput);
    if (isNaN(num) || num < 0) {
        updateDisplay("Ingresa un número válido");
        resetCalculation();
        return;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    previousInput += ' = ' + result;
    updateDisplay(previousInput);
    resetCalculation();
}

// Función para calcular la raíz cuadrada de un número
function calculateSquareRoot() {
    let num = parseFloat(currentInput);
    if (isNaN(num) || num < 0) {
        updateDisplay("Ingresa un número válido");
        resetCalculation();
        return;
    }
    let result = Math.sqrt(num);
    previousInput += ' = ' + result;
    updateDisplay(previousInput);
    resetCalculation();
}

// Función para borrar el último dígito
function backspace() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1); // Elimina el último carácter
        previousInput = previousInput.slice(0, -1);
        updateDisplay(previousInput || '0');
    }
}

// Reinicia los valores de la calculadora
function resetCalculation() {
    currentInput = '';
    firstOperand = null;
    currentOperator = null;
    previousInput = '';
}
