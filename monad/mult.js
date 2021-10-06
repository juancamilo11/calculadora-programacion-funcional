import range from "./range.js";

const mult = (firstNumber, secondNumber, add) => range(0,  Math.abs(secondNumber))
        .reduce((num) => add(num,Math.abs(firstNumber))) * Math.sign(firstNumber) * Math.sign(secondNumber);

export default mult;