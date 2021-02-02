const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ids = [1, 2, -3, 4, 5, 6, -7, 8, 9];
for (number of numbers)
{
    if (number > 4)
    {
        break;
    }
    console.log('number', number);
}

for (id of ids)
{
    if (id < 0)
    {
        continue;
    }
    console.log('id', id);
}