import * as actionTypes from './actionTypes'

export const increment =()=>{
    return{
        type : actionTypes.INC_COUNTER
    }
}

export const decrement =()=>{
    return{
        type :actionTypes.DEC_COUNTER,
    }
}
export const addition =(value)=>{
    return{
        type : actionTypes.ADD_COUNTER,
        val :value
    }
}

export const subtraction =(value)=>{
    return{
        type : actionTypes.SUBTRACT_COUNTER,
        val:value
    }
}