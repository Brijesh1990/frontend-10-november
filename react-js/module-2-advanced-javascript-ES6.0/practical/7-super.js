// super : method is used to access parent class properties inside of child class 


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