import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
export let increment = (num)=>{
  return {
         payload:num,
         type:'INCREMENT',
  }
}
 export let decrement = (num)=>{
  return {
         payload:num,
         type:'DECREMENT',
  }
}  
let initialstate =0; 

 let change =(state =initialstate , action )=>{
    switch(action.type){
        case 'INCREMENT':return state+action.payload; 
        case "DECREMENT":return state-action.payload ;
        default : return state ; 
    }
} 
 let change2 =(state =initialstate , action )=>{
    switch(action.type){
        case 'INCREMENT':return state+1; 
        case "DECREMENT":return state -1 ;
        default : return state ; 
    }
} 
 
const root = combineReducers({change,change2}) ;
export   const store = createStore(root);

 