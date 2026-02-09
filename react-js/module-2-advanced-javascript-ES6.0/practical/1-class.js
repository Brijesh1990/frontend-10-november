// what is class ?
// A class is a group of member and it member function
// A class is blue print of object
// A class is nothing whenever we can not create its object 
// any class object created by new keyword

class A 
{
    constructor(name,age)
    {
      //name and age stored in current object  
      this.name=name;
      this.age=age;
    }
}

var obj=new A("brijesh",35);  //new A() is an object of class A
console.log(obj);
console.log(obj.name);
console.log(obj.age);

