import React,{useState} from "react";
import Data from "./Data";
function ProductFilter()
{
//stored data in useState
const[filter,setFilter]=useState(Data); 
// filter t-shirts create a function 
const tShirts=()=>{
    const result=Data.filter((items)=>items.category=='t-shirts');
    setFilter(result);
}

// filter shorts create a function 
const Shorts=()=>{
    const result=Data.filter((items)=>items.category=='shorts');
    setFilter(result);
}

// filter paints create a function 
const PaintsApp=()=>{
    const result=Data.filter((items)=>items.category=='paints');
    setFilter(result);
}

// filter shoes create a function 
const ShoesApp=()=>{
    const result=Data.filter((items)=>items.category=='shoes');
    setFilter(result);
}
// fetch all data create a function 
const AllData=()=>{
    setFilter(Data);
    }
return(
<>
<div className="app">
<h1>Product Filter App</h1>
<hr />
<button type="button" onClick={AllData}>All</button>
<button type="button" onClick={tShirts}>T-shirts</button>
<button type="button" onClick={Shorts}>Short</button>
<button type="button" onClick={PaintsApp}>Paints</button>
<button type="button" onClick={ShoesApp}>Shoes</button>
{/* fetch all products */}
<div className="product">
    {/* fetch all products */}
    {filter.map((items,index)=>{
        return(
            <>
               <div className="product-grid">
                <p><img src={items.photo} alt="photo" /></p>
                <p><b>{items.name}</b></p>
                <p><b>Category :</b>{items.category}</p>
                <p>Rs.{items.price}</p>
               </div>
            </>
        )
    })}
   
</div>
</div>
</>
)
}

export default ProductFilter