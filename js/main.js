let currentInput = '';
let currentOperator = '';
let lastInput = '';

function appendNum(num) {
    currentInput += num;
    document.getElementById('displaydata').value = `${lastInput} ${currentOperator} ${currentInput}`;
}

function appendOperator(operation) {
    if(currentInput === '') {
        return;
    }
    if(currentInput !== '') {
        calculate();
    }
    currentOperator = operation;
    lastInput = currentInput;
    currentInput = '';
    document.getElementById('displaydata').value = `${lastInput} ${currentOperator}`;
}

function calculate() {
    
    if(lastInput === '' || currentInput === '') {
        return;
    }
    let result;
    var prev = parseFloat(lastInput);
    var current = parseFloat(currentInput);

    switch(currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '/':
            if(currentInput == 0) {
                alert("not divided by 0 (zero)");
            }
            result = prev / current;
            break;
        case '*':
            result = prev * current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentInput = result;
    currentOperator = '';
    lastInput = '';
    document.getElementById('displaydata').value = currentInput;
}

function clearData() {
    
    if(currentInput == '' && lastInput == '' && currentOperator == '') {
        alert("Field already clear");
    }
    else {
        alert("Are you want to reset data!!!");
    };
    currentInput = '';
    lastInput = '';
    currentOperator = '';
    document.getElementById('displaydata').value = '';
}