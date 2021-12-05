function askNumbers() {
   // const firstNumber = +prompt(message: 'Type first number');
 const secondNumber = +prompt(message: 'Type second number');
 const operator = prompt(message: 'Enter operator (either +, -, * or / ');
 const result =('This is the result');

 
  function addition(firstNumber, secondNumber){
    return result=firstNumber+secondNumber ;
}

      
function subtraction(firstNumber,secondNumber){
   return result=firstNumber-secondNumber ;

}

function multiplication(firstNumber,secondNumber){
    
    return result=firstNumber*secondNumber ;
    
}
function division(firstNumber, secondNumber){
    
     return result=firstNumber/secondNumber;
}

}
console.log(firstNumber, secondNumber, operator);

if (operator==='+') {
    alert(add(firstNumber,secondNumber));
} else if (operator==='-') {
    alert(subtraction(firstNumber,secondNumber));
    }
    else if (operator==='*') {
       alert(multiplication(firstNumber,secondNumber));
       }
       else if (operator==='/') {
           alert(division(firstNumber,secondNumber));
       }
}
