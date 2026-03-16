import React,{useState} from "react";

function AppCountDemo()
{
    const[count,setCount]=useState(0);

    return(
        <>
            <div className="w-25 p-2 mx-auto mt-5 shadow">
                <h1>Count Values:{count}</h1>
                <button className="btn-md btn btn-default btn-dark" onClick={()=>{setCount(count+1)}}>+</button>
                <button className="btn-md btn btn-default btn-dark ms-2" onClick={()=>{setCount(count-1)}}>-</button>
                <button className="btn-md btn btn-default btn-dark ms-2" onClick={()=>{setCount(0)}}>Reset</button>
            </div>
        </>
    )
}

export default AppCountDemo