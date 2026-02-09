// inheritance is used to access a parent class properties by its child class i.e called inheritance 
// inheritance is done by extends keyword 

class A 
{
  constructor(name,age)
  {
    this.name=name;
    this.age=age;
  }
}

class B extends A 
{
    constructor(name,age,facultyname,department)
    {
        super(name,age);
        this.facultyname=facultyname;
        this.department=department;
    }
}

var obj=new B("divyaraj",22,"Brijesh","IT");
console.log(obj);