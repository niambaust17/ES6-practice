// falsy
// 0, '', undefined, null, NaN, false
// truthy
// "0", ' ', true, {}, [], 'false'
const id = 17;
if (id || id == 0)
{
    console.log('True')
}
else
{
    console.log('False')
}