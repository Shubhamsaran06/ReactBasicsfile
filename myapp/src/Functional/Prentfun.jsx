import React from 'react';
import { createContext } from 'react';
import Contextclass from './Contextclass';
import Firstfun from './Firstfun';
import Usecontext from './Usecontext';



export let Name=createContext()
const Prentfun = () => {

    let data ={
         name:"Rahul",age:33,
         fun(a){
            console.log(a);
         }
    }


    return (
        <div>
           < Name.Provider value={data}>
             <Firstfun/>
             <Usecontext/>
            <Contextclass/>
           </Name.Provider>
        </div>
    );
}

export default Prentfun;
