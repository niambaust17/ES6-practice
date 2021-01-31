const wifeName = 'Tasnuva';
// wifeName = 'Toya'; cannot reassign in const variable
console.log(wifeName);

const rollNumbers = [17, 15, 21, 19, 23]
rollNumbers[2] = 25;
rollNumbers.push(33);
// rollNumbers = [23]; can change(add, delete, update) in this array/object but cannot reinitialize this array/object
console.log(rollNumbers);

const studentInfo = {
    fullName: 'Niam',
    Id: 17,
    Dept: 'CSE',
}
studentInfo['Dept'] = 'SE';
studentInfo['isMarried'] = false;
console.log(studentInfo);

// let leak proof don't go out of the scope 