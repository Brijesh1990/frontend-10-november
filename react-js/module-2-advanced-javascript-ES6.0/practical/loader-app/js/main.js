// applied loader 
var myVar;
function mainFunction()
{
 myVar=setTimeout("display()",4000);
}
function display()
{
//call DOM 
document.getElementById("main-content").style='display:block';
document.getElementById("loader").style='display:none'; 
}


// w.a.p to print take input from users
function result()
{
 var nm=document.getElementById("name").value;
//  document.getElementById("demo").innerHTML='Your name is :'+nm;
// sweet alert messages
Swal.fire({
  title: "Wow!",
  text: "Your Name is :"+nm,
  icon: "success"
});

}