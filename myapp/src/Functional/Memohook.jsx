import React,{useMemo, useState} from 'react';

const Memohook = () => {
   let [name,setname]=useState(10);
   let [count,setcount]=useState(0);

//    let f = useMemo(function,[dependency])
 
let call = useMemo(()=>{
    for (let i=0;i<=999999;i++){};
    console.log("in")
},[name])


    return (
        <div>
             <h1>name:{name}</h1>
             <h1>Count:{count}</h1>
             <button onClick={()=>{setname(name+1)}}>Click</button>
             <button onClick={()=>{setcount(count+1)}}>Click</button>
        </div>
    );
}

export default Memohook;
