import div from "./monad/div.js";
import mult from "./monad/mult.js";

let firstValue = 20;
let secondValue = -5;


//Sum
const doAdd = (firstNumber, secondNumber) => firstNumber + secondNumber;

//Sustract
const doSustract = (firstNumber, secondNumber) => firstNumber - secondNumber;


//multiplication
const doMultiplication = (firstNumber, secondNumber) => mult(firstNumber,secondNumber, doAdd);


//Division
const doDivition = (firstNumber ,secondNumber) => div(firstNumber,secondNumber, doAdd, doMultiplication);



//Results
console.log(`The numbers are firstNumber: ${firstValue} and secondNumber: ${secondValue}`);

console.log(`Add ${firstValue} and ${secondValue}: ${doAdd(firstValue, secondValue)}`); 
console.log(`sustract ${firstValue} and ${secondValue}: ${doSustract(firstValue, secondValue)}`); 
console.log(`mult ${firstValue} and ${secondValue}: ${doMultiplication(firstValue, secondValue)}`); 
console.log(`div ${firstValue} and ${secondValue}: ${doDivition(firstValue, secondValue)}`); 