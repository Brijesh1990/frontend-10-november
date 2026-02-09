// A=>B=>C=>D

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

class C extends B 
{
    constructor(name,age,facultyname,department,collegename)
    {
        super(name,age,facultyname,department);
        this.collegename=collegename;
    }
}

var obj=new C("divyaraj",22,"Brijesh","IT","Marwadi group of colleges");
console.log(obj);