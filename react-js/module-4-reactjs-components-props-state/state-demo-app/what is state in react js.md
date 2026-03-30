# what is state in React js ?

  1. state default in objects
  2. state provides mutable objects 
    examples: can be modify | change data to one components to another components 
  3. state are used to stored data in objects 
  4. state are read data | update data also 
  5. state are initialised using hooks in react js 

     import React,{useState} from 'react'
  6. state data are destructured or stored any data types using useState hooks           

   **examples of state** 
   
   ```
   import React,{useState} from 'react'
   function App()
   {
    <!-- destructuring of state -->
    const[data,setData]=useState(0);
    <!-- data => variables 
         setData => function that is return values
     -->

    return(
      <>
      
      </>
    )
   }

   ```
