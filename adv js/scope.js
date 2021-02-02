// inside the scope if we declare var then it break the scope and it will go to the parent scope and it is hoisting
// cono akta kichu declare korchi oita k uporer level a niye jabe etai hoisting

num3 = 10;
function add(num1, num2)
{
    const result = num1 + num2 + num3;
    console.log(result);
    // console.log(num4);
    num4 = 10;
    return result;
}
console.log(add(4, 5));
// console.log(result);
console.log(num3);