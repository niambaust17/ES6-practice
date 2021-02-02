const numbers = [1, 2, 4, 5, 7, 2, 3, 6];

// start index and end index don't change main array
const part = numbers.slice(2, 4);
console.log(part);

// start index and delete count change main array and it can insert item
const remove = numbers.splice(2, 3, 17, 15, 23);
// console.log(remove);
// console.log(numbers);

const together = numbers.join(',');
console.log(together);