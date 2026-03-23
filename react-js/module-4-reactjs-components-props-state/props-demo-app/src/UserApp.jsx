import React from "react";
// props destructuring or drilling 
function UserApp({name,email,age,address,hobbies})
{
    return (
        <>
            <div className="app">
                <h1>Name is : {name}</h1>
                <h3>Email is : {email}</h3>
                <h4>Age is : {age}</h4>
                <h5>Address is : {address}</h5>
                <h6>Hobbies are : {hobbies}</h6>
            </div>
        </>
    )
}

export default UserApp