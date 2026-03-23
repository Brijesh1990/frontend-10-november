import React from "react";
function EmployeeDetails(props)
{
    return(
        <>
            <div className="app">
            <h1>The Name of employee : {props.name}</h1>
            <h3>The Age of employee : {props.age}</h3>
            <h5>The Salary of employee : {props.salary}</h5>
            <h6>The Address of employee : {props.name}</h6>
     
      </div>
        </>
    )
}

export default EmployeeDetails