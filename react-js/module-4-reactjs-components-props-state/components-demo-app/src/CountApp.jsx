import React,{Component} from "react";
class Counter extends Component
{
    constructor()
    {
        super();
        this.state={
            count:0
        };
    }
// for increase 
increase=()=>{
    this.setState({count:this.state.count+1})
}
decrease=()=>{
    this.setState({count:this.state.count-1})
}
reset=()=>{
    this.setState({count:0})
}
render(){
    return(
        <>
            <div className="w-25 p-5 mt-5 bg-primary text-white mx-auto rounded-3">
            <h1>Counter : {this.state.count}</h1>
            <button onClick={this.increase} className="btn btn-lg btn-dark ms-0">+</button>
            <button onClick={this.decrease} className="btn btn-lg btn-dark ms-2">-</button>
           <button onClick={this.reset} className="btn btn-lg btn-dark ms-2">Reset</button>
            </div>
        </>
    )
}

}

export default Counter
