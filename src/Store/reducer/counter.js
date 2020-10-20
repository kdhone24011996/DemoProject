
import * as actionTypes from '../action/actionTypes'
const intialState ={
    counter : 0,
}

const reducer = (state = intialState, action)=>{

    switch(action.type){
        
        case(actionTypes.INC_COUNTER):
        return{
            ...state,
            counter: state.counter+1
        }
        break;

        case(actionTypes.DEC_COUNTER):
        return{
            ...state,
            counter: state.counter-1
        }


        case(actionTypes.ADD_COUNTER):
        return{
            ...state,
            counter: state.counter+action.val
        }

        case(actionTypes.SUBTRACT_COUNTER):
        
        return{
            ...state,
            counter: state.counter-action.val
        }

    }

return {
    ...state,

}
}

export default reducer