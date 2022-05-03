import {Component} from "react";
import {useSelector,useDispatch,connect} from 'react-redux'
class ClassCounter extends Component{
   
    incrementHandler(){
        this.props.increment()
    }

    decrementHandler(){
        this.props.decrement()
    }

    toggleHandler(){}

    render(){
        return(
            <div>
            <h3>Counter</h3>
            <div>Counter value {this.props.counter}</div>
            <div>
                <button onClick={this.incrementHandler.bind(this)}>increment</button>
                <button onClick={this.decrementHandler.bind(this)}>decrement</button>

            </div>
            <button onClick={this.toggleHandler}>Toggle Counter</button>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
    counter:state.counter
}
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        increment:()=>dispatch({type: 'increment'}),
        decrement:()=>dispatch({type: 'decrement'})

    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(ClassCounter)