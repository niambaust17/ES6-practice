const numbers = [2, 3, 4, 5, 6];

// numbers.map(function (number, index, array)
// {
//     console.log(number, index, array);
// });

// map apply on array it gives a array as output
const square = numbers.map(number => number * number);
console.log(square);

// filter gives a array as output
const bigger = numbers.filter(number => number > 3);
console.log(bigger);

// find gives first number as output if condition is true for multiple number 
const onlyBigger = numbers.find(number => number > 3);
console.log(onlyBigger);

