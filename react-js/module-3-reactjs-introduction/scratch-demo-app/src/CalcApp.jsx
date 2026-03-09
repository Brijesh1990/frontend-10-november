import React from "react";
// const a=10;
// const b=20;
// const c=a+b;
// const d=a-b;
// const e=a*b;
// const f=a/b;


// function should return single values 
// function CalcApp()
// {
//     return <h1>The additions of numbers is : {c}</h1>
    
// }
// export default CalcApp

// access multiple html elements in function called React fragments 
// function CalcApp()
// {
//     return(
//         <>
//           <h1>The additions of numbers is : {c}</h1>
//           <h1>The substractions of numbers is : {d}</h1>
//           <h1>The multiplications of numbers is : {e}</h1>
//           <h1>The divisions of numbers is : {f}</h1>
//         </>
//     )
    
// }
// export default CalcApp


// function CalcApp()
// {
//     return(
//         <div>
//           <h1>The additions of numbers is : {c}</h1>
//           <h1>The substractions of numbers is : {d}</h1>
//           <h1>The multiplications of numbers is : {e}</h1>
//           <h1>The divisions of numbers is : {f}</h1>
//         </div>
//     )
    
// }
// export default CalcApp

// function CalcApp()
// {
//     return(
//         <React.Fragment>
//           <h1>The additions of numbers is : {c}</h1>
//           <h1>The substractions of numbers is : {d}</h1>
//           <h1>The multiplications of numbers is : {e}</h1>
//           <h1>The divisions of numbers is : {f}</h1>
//         </React.Fragment>
//     )
    
// }
// export default CalcApp

const name="hi i am : Brijesh kumar pandey";

function CalcApp()
{
    return(
        <React.Fragment>
           <div className="app">
            <span>{name}</span>
           </div>
        </React.Fragment>
    )
    
}
export default CalcApp
