import { useState } from "react";
import {useSelector,useDispatch} from"react-redux"
function Counter(){
    const state = useSelector((state)=>state.counterData)
    const dispatch = useDispatch();
    return(
        <div className="container">
            <div className="row">
                <h3>Count is {state.count}</h3>
                <button className="btn btn-primary" onClick={()=>dispatch({type:"increment"})}>Increment</button>
                <button className="btn btn-danger" onClick={()=>dispatch({type:"decrement"})}>decremnet</button>
                <button className="btn btn-success"  onClick={()=>dispatch({type:"reset"})}>Reset</button>
            </div>
        </div>
    )
}

export default Counter