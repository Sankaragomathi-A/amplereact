import { useDispatch, useSelector,connect } from "react-redux";
import {Component} from "react";
import React from "react";

function Counter(){
    const dispatch=useDispatch();


 const counter= useSelector(state=>state.counter)

    const incrementHandler=()=>{
        dispatch({type: "increment"})
    }

    const decrementHandler=()=>{
        dispatch({type : "decrement"})
    }
    const increseHandler=()=>{
        dispatch({type: 'increase',value: 5})
    }


    const toggleHandler=()=>{

    }
    return(
        <div>
            <h3>Counter</h3>
            <div>Counter value {counter}</div>
            <div>
                <button onClick={incrementHandler}>increment</button>
                <button onClick={increseHandler}>increaseBy5</button>

                <button onClick={decrementHandler}>decrement</button>

            </div>
            <button onClick={toggleHandler}>Toggle Counter</button>
        </div>
    )
}

export default Counter