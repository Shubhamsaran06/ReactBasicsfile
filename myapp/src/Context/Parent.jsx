import React,{useContext,useState} from 'react';
import {Data} from '../AppContext'
import Classchild from './Classchild';

const Parent = () => {
    const[change,setchange]=useState('')
    let name = useContext(Data)
    return (
        <div>
            <h1>{name.age}</h1>
            <input type="text" onChange={(e)=>{setchange(e.target.value)}} />
            <button onClick={()=>{name.fun(change)}}>Click</button>
            <Classchild/>
        </div>
    );
}

export default Parent;
