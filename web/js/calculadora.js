$(document).ready(function() {
    let currentInput = '0';
    let previousInput = '0';
    let currentOperation = null;
    let shouldResetDisplay = false;
    let memory = 0;
    const decimalPlaces = 2;

    const display = $('#display');
    const subDisplay = $('#subDisplay');

    function updateDisplay() {
        display.text(currentInput);
        if (previousInput !== '0' && currentOperation) {
            subDisplay.text(previousInput);
        } else {
            subDisplay.text('0');
        }
    }

    $('.btn-number').click(function() {
        const number = $(this).data('number').toString();
        
        if (shouldResetDisplay) {
            currentInput = '0';
            shouldResetDisplay = false;
        }
        
        if (number === '.' && currentInput.includes('.')) {
            return;
        }
        
        if (currentInput === '0') {
            if (number === '.') {
                currentInput = '0.';
            } else if (number === '00') {
                currentInput = '0';
            } else {
                currentInput = number;
            }
        } else {
            currentInput = currentInput.toString() + number;
        }
        
        updateDisplay();
    });

    $('.btn-operator').click(function() {
        const operator = $(this).data('action');
        
        previousInput = currentInput;
        currentOperation = operator;
        shouldResetDisplay = true;
        
        updateDisplay();
    });

    function calculate() {
        if (!currentOperation) return;
        
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result = 0;
        
        switch (currentOperation) {
            case 'add':
                result = prev + current;
                break;
            case 'subtract':
                result = prev - current;
                break;
            case 'multiply':
                result = prev * current;
                break;
            case 'divide':
                if (current === 0) {
                    alert('Error: División por cero');
                    return;
                }
                result = prev / current;
                break;
            case 'percent':
                result = prev * (current / 100);
                break;
        }
        
        result = parseFloat(result.toFixed(decimalPlaces));
        
        currentInput = result.toString();
        previousInput = '0';
        currentOperation = null;
        
        updateDisplay();
    }
    
    $('[data-action="equals"]').click(function() {
        if (currentOperation) {
            calculate();
            shouldResetDisplay = true;
        }
    });

    $('[data-action="all-clear"]').click(function() {
        currentInput = '0';
        previousInput = '0';
        currentOperation = null;
        shouldResetDisplay = false;
        updateDisplay();
    });

    $('[data-action="clear"]').click(function() {
        currentInput = '0';
        updateDisplay();
    });

    $('[data-action="sqrt"]').click(function() {
        const value = parseFloat(currentInput);
        if (value < 0) {
            alert('Error: No se puede calcular la raíz cuadrada de un número negativo');
            return;
        }
        currentInput = Math.sqrt(value).toFixed(decimalPlaces).toString();
        updateDisplay();
    });

    $('[data-action="m-plus"]').click(function() {
        memory += parseFloat(currentInput);
        $('.memory-display').text(`M1: ${memory}`);
    });

    $('[data-action="m-minus"]').click(function() {
        memory -= parseFloat(currentInput);
        $('.memory-display').text(`M1: ${memory}`);
    });

    $('[data-action="mr"]').click(function() {
        currentInput = memory.toString();
        updateDisplay();
    });

    $('[data-action="mc"]').click(function() {
        memory = 0;
        $('.memory-display').text(`M1: ${memory}`);
    });

    $('[data-action="open-parenthesis"], [data-action="close-parenthesis"]').click(function() {
        alert("Función de paréntesis no implementada en esta versión");
    });
    
    $('[data-action="arrow"]').click(function() {
        alert("Función de flecha no implementada en esta versión");
    });

    updateDisplay();
});