import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionCreators from '../../Store/action/index'

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtractCounter}  />

               <br/>
                <button onClick={()=>this.props.onStoreValue(this.props.counter)}>clickAndStore</button>
               
               <ul>
               {this.props.store.map(stObject =>(
                      <li key ={stObject.id}
                       onClick ={()=>this.props.deleteValue(stObject.id)}>{stObject.value}</li>
                   ))}
                 
               </ul>

            
                
            </div>
        );
    }
}

const mapStateToProps = state=>{
    return{
        counter : state.ctr.counter,
        store: state.str.store,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onIncrementCounter : ()=> dispatch(actionCreators.increment()),
        onDecrementCounter : ()=>dispatch(actionCreators.decrement()),
        addCounter : ()=> dispatch(actionCreators.addition(10)),
        subtractCounter : ()=> dispatch(actionCreators.subtraction(5)),
        onStoreValue : (counter)=>dispatch(actionCreators.storeToArray(counter)),
        deleteValue : (id)=>dispatch(actionCreators.deleteFromArray(id))
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);