import React, { useState,useEffect } from 'react';
import Axioss from "axios";



const Axios = () => {

const [data , setdata]= useState("")

useEffect(() => {
    Axioss.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        console.log(response);
        setdata(response.data);
        console.log(data)
    });
}, []);




    return (
        <div>
              <p>Hello</p>
        </div>
    );
}

export default Axios;
