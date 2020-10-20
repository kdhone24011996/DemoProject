import * as actionTypes from '../action/actionTypes'


const intialState ={
    store:[]
}

const reducer = (state = intialState, action)=>{

    switch(action.type){
        
    case(actionTypes.STORE):
        
    return{
        ...state,
       store: state.store.concat({id:new Date(),value:action.counter})
    }

    case(actionTypes.DELETE):
        
   const updatedArray = state.store.filter((stObject)=>stObject.id !== action.deleteId)
    return{
        ...state,
        store: updatedArray 
    }

    }

return {
    ...state,

}
}

export default reducer