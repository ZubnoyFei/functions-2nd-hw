function askNumbers() {
    const firstNumber = +prompt('Type first number');
    const secondNumber = +prompt('Type second number');
    const operator = prompt('Enter operator (either +, -, * or / )');
    const result = ('This is the result');



    if (operator === '+') {
        alert(addition(firstNumber, secondNumber));
    } else if (operator === '-') {
        alert(subtraction(firstNumber, secondNumber));
    }
    else if (operator === '*') {
        alert(multiplication(firstNumber, secondNumber));
    }
    else if (operator === '/') {
        alert(division(firstNumber, secondNumber));

    }
    console.log(result);
}

askNumbers();

function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}


function subtraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;

}

function multiplication(firstNumber, secondNumber) {

    return firstNumber * secondNumber;

}
function division(firstNumber, secondNumber) {

    return  firstNumber / secondNumber;
}