import React from "react";
import Data from "./Data";
import { Container,Row,Button } from "react-bootstrap";
function ResponsiveData()
{
    return(
        <>
          <Container className="p-5">
           <h1 align='center'>Students Data List(Add Bootstrap)</h1>
                <Row>
               {Data && Data.map((items)=>{
                return(
                <>
                   <div className="col-md-3  p-3 bg-primary m-2 text-white fs-5">
                   <p>{items.id}</p>
                   <p>{items.name}</p>
                   <p>{items.age}</p>
                   
                   </div>
                </>
                )
               })}
               
              </Row>
                  
                
        </Container>
        </>
    )
}
export default ResponsiveData