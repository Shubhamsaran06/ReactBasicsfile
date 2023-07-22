import React from "react";
import Firstfun from "./Functional/Firstfun";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import Todolist from "./Self_practice/Todolistuncontrolled";
import Todolistcontroll from "./Self_practice/TodolistControlled";
import { NavLink } from "react-bootstrap";
import Prentfun from "./Functional/Prentfun";
import Axios from "./Functional/Axios";
import Main from "./Redux/Main";
import { Provider } from "react-redux";
import { store } from "./Redux";

export default function App(){
     return(
          <div>
          
             {/* <Firstfun/>
             <Prentfun/> */}
             {/* <Todolist/>
             <Todolistcontroll/> */}


             {/* <Axios/> */}
                


            <Provider store={store}>
            <Main/>
            </Provider>
              
          </div>
     )
} 