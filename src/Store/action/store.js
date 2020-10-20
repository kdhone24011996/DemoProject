import * as actionTypes from './actionTypes'

export const storeToArray =(counter)=>{

    return  (dispatch)=>{
  
          setTimeout(()=>{
               dispatch({type:actionTypes.STORE,counter:counter})
             
          },1000)
     
      }
  }
  
  
  export const deleteFromArray =(id)=>{
      return{
          type : actionTypes.DELETE,
          deleteId: id
      }
  }
  