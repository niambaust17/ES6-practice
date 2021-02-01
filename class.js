class Student
{
    constructor(sId, sName)
    {
        this.id = sId;
        this.name = sName;
        this.school = "DZS";
    }
}
// when we create a object it automatically call the constructor
const student1 = new Student(17, "Niam");
const student2 = new Student(15, "Emu");
console.log(student1, student2);
console.log(student2.name);