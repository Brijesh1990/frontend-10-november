import React from "react";
import Data from "./Data";
function GalleryApp({Data})
{
  return(
    <>
        <div className="gallery-app">
           {Data.map((items)=>{
            return(
                <>
                <div className="gall-grid">
                {/* <p>{items.id}</p> */}
                <p><img src={items.url} alt="photo" /></p> 
                </div>
                </>
            )
           })}
          

        </div>
    </>
  )  
}

export default GalleryApp