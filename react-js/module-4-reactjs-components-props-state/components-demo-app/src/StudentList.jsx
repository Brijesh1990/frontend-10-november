import React from "react";
import Data from "./Data";
function StudentData()
{
    return(
        <>
           <h1 align='center'>Students Data List</h1>
            <div className="parent">
               {Data && Data.map((items)=>{
                return(
                <>
                   <div className="child">
                   <p>{items.id}</p>
                   <p>{items.name}</p>
                   <p>{items.age}</p>
                   
                   </div>
                </>
                )
               })}
               
            </div>
        </>
    )
}
export default StudentData