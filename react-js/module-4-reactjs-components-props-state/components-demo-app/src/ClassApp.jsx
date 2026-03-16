import React,{Component} from "react";
const name="Brijesh kumar pandey";
class App extends Component 
{
    render()
    {
        return(
            <>
                <h1 className="text-center mt-5 p-5 text-danger">Hi i am : {name}</h1>
            </>
        )

    }

}

export default App