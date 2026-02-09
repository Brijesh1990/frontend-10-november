// An object is an instances of class
// or
// An object is an examples of class
//  object should be created with new keyword

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