import React from 'react'
import Data from './Data'
import { MDBContainer,MDBRow,MDBBtn,MDBCard,MDBCardBody} from 'mdb-react-ui-kit'

export default function App() {
return (
<>
<MDBContainer>
 
 <MDBRow className='gap-5 mt-5'>
 
 <p>
 
 <MDBBtn>Totals Employees : <span className='fa fa-user fs-4'></span> <span className='badge badge-danger bg-danger p-2 text-white fs-6 pill rounded-pill'>{Data.length}</span></MDBBtn>
 
 
 <MDBBtn className='ms-5'>Totals Cart : <span className='fa fa-shopping-cart fs-4'></span> <span className='badge badge-danger bg-danger p-2 text-white fs-6 pill rounded-pill'>{Data.length}</span></MDBBtn>

 </p>



{Data && Data.map((row)=>{
  return(
    <>
       <div className='col-md-3 ms-0'>
          <MDBCard>
          <MDBCardBody className='p-2 shadow text-center'>
         
          <p><img src={row.photo} alt='photo' className='img-fluid w-50' /></p>
          <p><b>Name :</b>{row.name}</p>
          <p><b>Age :</b>{row.age}</p>
          <p><b>Salary :</b>{row.salary}</p>
          <p><MDBBtn>Open Profile <span className='fa fa-users'></span></MDBBtn></p>

          </MDBCardBody>
          </MDBCard>
        </div>
    </>
  )
})}


</MDBRow>
</MDBContainer>
</>
)
}
