import React from 'react'
import redux from 'redux'
import { createStore } from 'redux'

const reduxCounter=(state={counter:0},action)=>{
    if(action.type === 'increment'){
        return{
            counter:state.counter+1
        }
    }
    if(action.type === 'decrement'){
        return{
            counter:state.counter-1
        }
    }
    if(action.type === 'increase'){
        return{
            counter:state.counter+action.value
        }
    }
    return state
}


const store=createStore(reduxCounter)

export default store

