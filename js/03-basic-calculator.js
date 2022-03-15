// IMPORT THE MODULE
import {add, sub, mul, div} from './modules/calculator.js';
// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let choice = 'n';
do {
    let num1 = parseInt(prompt('Enter the first number.'));
    let num2 = parseInt(prompt('Enter the second number.'));
    let opeChoice = prompt(`Pick the operation:\nAdd - enter add\nSubtract - enter sub\nMultiply - enter mul\nDivide - enter div`);
    if ((opeChoice == 'add') || (opeChoice == 'sub') || (opeChoice == 'mul') || (opeChoice == 'div')) {
        switch(opeChoice) {
            case 'add':
                alert(add(num1, num2));
                break;
            case 'sub':
                alert(sub(num1, num2));
                break;
            case 'mul':
                alert(mul(num1, num2));
                break;
            case 'div':
                alert(div(num1, num2));
                break;
        }
        break;
    } else {
        alert('You entered an invalid operation type.');
    }
} while (choice = 'n');


// CHECK TO SEE WHAT OPERATION THEY'RE USING

// CALL THE APPROPRIATE FUNCTION
// switch(opeChoice) {
//     case 'add':
//         alert(add(num1, num2));
//         break;
//     case 'sub':
//         alert(sub(num1, num2));
//         break;
//     case 'mul':
//         alert(mul(num1, num2));
//         break;
//     case 'div':
//         alert(div(num1, num2));
//         break;
// }