const students = [
    { id: 17, name: 'abir' },
    { id: 15, name: 'mahi' },
    { id: 19, name: 'jalil' },
    { id: 13, name: 'monty' }
];

// let studentName = [];
// for (student of students)
// {
//     studentName.push(student['name']);
// }
// console.log(studentName);

const studentName = students.map(student => student['name']);
const studentId = students.map(student => student.id);

const studentIdBigger = students.filter(student => student.id > 15);

console.log(studentName, studentId, studentIdBigger);