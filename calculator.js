import div from "./monad/div.js"
import mult from "./monad/mult.js"

let firstValue = 20;
let secondValue = 4;


//Sum
const doAdd = (firstNumber, secondNumber) => firstNumber + secondNumber;

//Sustract
const doSustract = (firstNumber, secondNumber) => firstNumber - secondNumber;


//Function for calculating range between tho numbers (Both included)
const range = (start, end) => {
    if(start === end) return [start];
    if(start < end)
        return [start, ...range(start + 1, end)];
    return [end, ...range(end + 1, start)];
}


//multiplication
const doMultiplication = (firstNumber, secondNumber) => mult(firstNumber,secondNumber, doAdd, doSustract);


//Division
const doDivition = (firstNumber ,secondNumber) => div(firstNumber,secondNumber, 0, doAdd, doSustract);


console.log(`Division, primer numero: ${firstValue} and secondNumber: ${secondValue} : ${doDivition(firstValue, secondValue)}`);

//Results
/*
console.log(`The numbers are firstNumber: ${firstValue} and secondNumber: ${secondValue}`);

console.log(`Add ${firstValue} and ${secondValue}: ${add(firstValue, secondValue)}`); 
console.log(`sustract ${firstValue} and ${secondValue}: ${sustract(firstValue, secondValue)}`); 
console.log(`mult ${firstValue} and ${secondValue}: ${mult(firstValue, secondValue)}`); 
console.log(`div ${firstValue} and ${secondValue}: ${div(firstValue, secondValue)}`); 

console.log(`The numbers firstNumber: ${firstValue} and secondNumber: ${secondValue} are the same.`);
*/