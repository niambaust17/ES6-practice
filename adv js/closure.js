function stopWatch()
{
    let count = 0
    return function ()
    {
        count++;
        return count
    }
}
// if we call/return a function from another function then it make a closed environment this is called closure
// call a function inside a function or return a function from another, when you create an internal scope but cannot access from outside 
// kono akta function thake jodi arekta function ke call kori othoba return kori tahole se akta closed environment toiri kore etai closure
const clock1 = stopWatch();
const clock2 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock1());