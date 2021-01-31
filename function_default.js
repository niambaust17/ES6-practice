function add(number1, number2 = 15)
{
    // number2 = number2 || 10; people work with it before
    return number1 + number2;
}
const total = add(10, 5);
const subtotal = add(10);
console.log(total, subtotal);