import React,{useContext} from 'react';

import {Name} from './Prentfun'

const Usecontext = () => {

    let data = useContext(Name);
    console.log(data)
    return (
        <div>
            <h1>name:{data.name}</h1>
            <h1>age:{data.age}</h1>
            <button onClick={()=>{data.fun("Raman")}}>click</button>
        </div>
    );
}

export default Usecontext;
