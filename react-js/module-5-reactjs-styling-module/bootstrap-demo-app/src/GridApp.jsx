import React from 'react'

export default function GridApp() {
  return (
   <>
    <div className='container mt-5'>
        <div className='row'>
            {/* <div className='col-4 bg-primary text-white text-center p-5'>Column 1</div>
            <div className='col-4 bg-secondary text-white text-center p-5'>Column 2</div>
            <div className='col-4 bg-success text-white text-center p-5'>Column 3</div> */}

             <div className='col-md-4 mt-2 bg-primary text-white text-center p-5'>Column 1</div>
            <div className='col-md-4 mt-2 bg-secondary text-white text-center p-5'>Column 2</div>
            <div className='col-md-4 mt-2 bg-success text-white text-center p-5'>Column 3</div>
        </div>
    </div>
   </>
  )
}
