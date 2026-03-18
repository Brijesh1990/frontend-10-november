import React from "react";
import {Container,Row,Button} from 'react-bootstrap'
import Data from "./Data";
function EmployeeData()
{
 return (
    <>
    
     <Container className="p-5 mt-5 mx-auto">
        <h1>Get all employee data <Button className="btn btn-md btn-danger text-white float-end">Export in excel</Button></h1>
        <hr />
        <Row>
            {/* applied map function  */}
            {Data && Data.map((item,index)=>{
                return(
                    <>          
                     <div className="col-md-3 gap-5 m-4 mt-5">
                        <p className="text-center"><img src={item.photo} alt={item.photo} className="img-fluid" style={{width:"80%",height:"150px"}} /></p>
                        <p className="text-center"><b>Id is :</b>{item.id}</p>

                         <p className="text-center"><b>Name is :</b>{item.name}</p>
                          <p className="text-center"><b>Age is :</b>{item.age}</p>
                           <p className="text-center"><b>Salary is :</b>{item.salary}</p>
                     </div>
                    </>
                )
            })}
           
        </Row>
     </Container>

       <Container className="p-5 mt-5 mx-auto">
        <h1 className="fs-3">Get all employee data who's age is greater than 25 <Button className="btn btn-md btn-danger text-white float-end">Export in excel</Button></h1>
        <hr />
        <Row>
            {/* applied map function with filter  */}
            {Data && Data.filter((item)=>item.age>25 && item.salary>86000).map((item,index)=>{
                return(
                    <>          
                     <div className="col-md-3 gap-5 m-4 mt-5" key={index.id}>
                        <p className="text-center"><img src={item.photo} alt={item.photo} className="img-fluid" style={{width:"80%",height:"150px"}} /></p>
                        <p className="text-center"><b>Id is :</b>{item.id}</p>

                         <p className="text-center"><b>Name is :</b>{item.name}</p>
                          <p className="text-center"><b>Age is :</b>{item.age}</p>
                           <p className="text-center"><b>Salary is :</b>{item.salary}</p>
                     </div>
                    </>
                )
            })}
           
        </Row>
     </Container>

    </>
 )   
}
export default EmployeeData