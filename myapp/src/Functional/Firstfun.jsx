import React from "react";
import { useState,useEffect,useRef } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Firstfun(){
    let [name,setname] = useState("Ram");
    let [num,setnum] = useState(0);
    // let [obj,setobj] = useState({name:"Ram",age:90})
    // let [arr,setarr] = useState([])
     
    let input = useRef();
    let get=()=>{
        console.log(input.current.value)
    }



    let rendercount = useRef(0);
   
    console.log(rendercount)
    
    useEffect(()=>{rendercount.current = rendercount.current+1
    },[num,name]);

    function change(){
        if(name=="Ram"){
            setname("Shyam")
        }else{
            setname("Ram")
        }
    }
    
    let inc = ()=>{
        setnum(num+1);
        console.log("Effect updated")
    }
    
    let dec = ()=>{
        if(num<=0){
            setnum(0)
        }else{
            setnum(num-1)
        }
    }
     
    // let changeobj=()=>{
    //     setobj((p)=>{console.log(p)
    //      return{...p,name:"Shyam",age:91}
    //     })
    // }
    
    // let addarr=()=>{
    //     setarr((p)=>{
    //         return[...p,{name:"Harry",age:50},{name:"John",age:45}]
    //     })
    // console.log(arr);
    // }  


    // useEffect(()=>{
    //     console.log("Effect Update")
    //     document.title=num;
    // },[num])

    //context , use ref , use memo
   
    // UseEffect render hone k bad run hota h ek function or ek dependency dena hoti h 
    // Dependency me state dena hota h jese hi state me change hoga useEffect call hoga nhi to nhi hoga
    // use effect render k sath ek hi bar call hoga agli bar tb call hoga jab dependency update hogi

    // useRef=> ye ek mutable variable ki tarah kam krta h ye update ho jata h pr tb tk show nhi rta jab tk component rerender nhi ho jata
    // iske update hone se component rerender nhi hota 





     return(
          <div>

             <h1>rendercount:-{rendercount.current}</h1>
            

            <input type="text" ref={input}/>
            <button onClick={get}>change</button>

             <button onClick={()=>{
                rendercount.current=rendercount.current+1
                console.log(rendercount.current)
             }}>Increment Rendercount</button>

             <h1>Hello World</h1>
              <h1>Hello {name}</h1>
              <h1>{num}</h1>
              
              {/* <h1>Name:{obj.name}    Age:{obj.age}</h1> */}

             <button onClick={change} className="btn btn-info m-2">Change</button>
             <button onClick={inc} className="btn btn-info m-2">Increment</button>
             <button onClick={dec} className="btn btn-info m-2">Decrement</button>
                
            
             
             
             
             
             {/* <button onClick={changeobj} className="btn btn-info m-2">Changeobj</button>
             <button onClick={addarr} className="btn btn-info m-2">Add element</button> */}
              


            {/* {arr.map((value,index)=>{
                return(
                    <>
                    <h2>Name:{value.name}</h2>
                    <h2>Age:{value.age}</h2>
                    </>
                )
            })} */}



          </div>
     )
} 