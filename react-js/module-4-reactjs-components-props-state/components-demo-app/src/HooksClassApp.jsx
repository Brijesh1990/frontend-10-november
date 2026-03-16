import React,{Component,useState} from "react";

class Api extends Component
{
  render(){
    const[count,setCount]=useState(0);
    return(
        <>
            <h1>Counter initial values is : {count}</h1>

        </>
    )
  }  
}
export default Api