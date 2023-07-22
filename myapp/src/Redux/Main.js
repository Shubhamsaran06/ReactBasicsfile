import React from 'react'
import { increment,  decrement} from './index.js';
import { useDispatch ,useSelector } from 'react-redux';
function Main() { 
    let dispatch = useDispatch();
     let data = useSelector(mystate => mystate.change)
  return (
    <div>
      <button onClick={ ()=>{ dispatch(increment(20))}}> inc </button>
      <h2>  state :  {data}  </h2>
       <button onClick={ ()=>{ dispatch(decrement(10))}}>  dec </button>
    </div>
  )
}

export default Main
