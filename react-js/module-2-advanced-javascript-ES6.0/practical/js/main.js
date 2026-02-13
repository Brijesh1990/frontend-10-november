function validation()
{
  if(document.frm.name.value=="")
  {
  Swal.fire({
  title: "sorry ?",
  text: "you can not left name is blank?",
  icon: "error"
  });
  document.frm.name.focus();
  return false;
  }

  //only accept alphabetic character  check via regular express in js 
  var nm=/^[a-zA-Z]+$/;
  if(!nm.test(document.frm.name.value))
  {
  Swal.fire({
  title: "sorry ?",
  text: "you can only take name is alphabetic character?",
  icon: "error"
  });
  document.frm.name.focus();
  return false;
  }

  if(document.frm.email.value=="")
  {
  Swal.fire({
  title: "sorry ?",
  text: "you can not left email is blank?",
  icon: "error"
  });
  document.frm.email.focus();
  return false;
  }

  //only accept alphabetic character  check via regular express in js 
  var em=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(!em.test(document.frm.email.value))
  {
  Swal.fire({
  title: "sorry ?",
  text: "you can only take valid email address",
  icon: "error"
  });
  document.frm.email.focus();
  return false;
  }

  if(document.frm.phone.value=="")
  {
  Swal.fire({
  title: "sorry ?",
  text: "you can not left phone is blank?",
  icon: "error"
  });
  document.frm.phone.focus();
  return false;
  }

  //only accept alphabetic character  check via regular express in js 
  var ph=/^[0-9]{10}$/;
  if(!ph.test(document.frm.phone.value))
  {
  Swal.fire({
  title: "sorry ?",
  text: "you can only Enter Min:10 and Max:10 digits of phone numbers",
  icon: "error"
  });
  document.frm.phone.focus();
  return false;
  }

  if(document.frm.password.value=="")
  {
  Swal.fire({
  title: "sorry ?",
  text: "you can not left password is blank?",
  icon: "error"
  });
  document.frm.password.focus();
  return false;
  }

  //only accept alphabetic character  check via regular express in js 
  var pwd=/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{3,10}$/;
  if(!pwd.test(document.frm.password.value))
  {
  Swal.fire({
  title: "sorry ?",
  text: "you can only Enter Min:3 and Max:10, atleast one number, special character with one uppercase character",
  icon: "error"
  });
  document.frm.password.focus();
  return false;
  }

}