class Parent
{
    constructor()
    {
        this.parentName = 'Fahim';
    }
    getChildParentName()
    {
        return `${ this.parentName }s child name is ${ this.childName }`;
    }
}
class Child extends Parent
{
    constructor(name)
    {
        super();
        this.childName = name;
    }
}
// if we want to access parent property then we must call super constructor inside the child constructor
const baby1 = new Child('Babu');
const baby2 = new Child('Alu');
console.log(baby1);
console.log(baby2);
console.log(baby1.getChildParentName());
console.log(baby2.getChildParentName());