import React,{useState} from "react";
import { Container,Row,Button } from "react-bootstrap";
function App()
{
  // destructuring of state
  const[name,setName]=useState("Brijesh kumar Pandey");
  return(
    <>
     <Container className="w-50 mx-auto bg-primary rounded-3 p-5 mt-5 app">
      <Row className="text-white">
        <p className="text-center">The name of Users is</p>
        <p className="text-center">{name}</p>
        <Button type="button" onClick={()=>setName("Neeldeep sinh jadeja")} className="btn btn-lg btn-danger text-white w-50 mt-5 mx-auto">Update Users <span className="bi bi-person"></span></Button>
      </Row>
     </Container>

    </>
  )
}

export default App