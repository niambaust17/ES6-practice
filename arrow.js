// type 1
// function doubleIt(number)
// {
//     return number * 2;
// }

// type 2
// const doubleIt = function (number)
// {
//     return number * 2;
// }

// parameter name => return
const doubleIt = number => number * 2;
const addNumber = (number1, number2) => number1 + number2;
const give13 = () => 13;
const someMath = (number1, number2) =>
{
    const sum = number1 + number2;
    const multiplication = number1 * number2;
    const result = sum + multiplication;
    return result;
}
console.log(doubleIt(5));
console.log(addNumber(5, 12));
console.log(give13());
console.log(someMath(7, 3));