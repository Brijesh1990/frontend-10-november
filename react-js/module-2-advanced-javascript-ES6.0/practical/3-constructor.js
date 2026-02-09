// constructor is same name of class 
// constructor allow to access member function when we create its object
// constructor special type of method

//or

// A constructor is same name of class whenever we create an object constructor automatically called

// there are three type constructor
//    1) user defined constructor
//    2) pre-defined constructor 
//    3) parameterised constructor



class demo 
{
    constructor(fname,lname,address)
    {
      this.fname=fname;
      this.lname=lname;
      this.address=address;
    }
}
var obj=new demo("divraj","jadeja","150 feet ring road rajkot");
// console.log(obj);
// console.log(typeof(obj));
console.log(obj.fname);

// here an object is new demo()
