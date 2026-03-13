import React from "react";
import { FaArrowCircleLeft,FaUser,FaRupeeSign,FaWeibo } from "react-icons/fa";
import 'animate.css'

const emp={
id:1001,
name:"Brijesh",
age:35,
salary:89500,
department:"IT"
}
function EmployeeData()
{
return(
<>
<div className="app">

<p><b><FaArrowCircleLeft className="iconSize" /> Employee Id : {emp.id}</b></p>
<p><b><FaUser className="iconSize" /> Employee Name : {emp.name}</b></p>
<p><b><FaRupeeSign className="iconSize" /> Employee salary : {emp.salary}</b></p>
<p><b><FaWeibo className="iconSize" /> Employee Department : {emp.department}</b></p>

</div>
</>
)
}
export default EmployeeData