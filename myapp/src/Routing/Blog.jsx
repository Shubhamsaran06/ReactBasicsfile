import React, {Component} from "react";
import {NavLink, Navigate } from "react-router-dom";

export default class Blog extends Component{
    constructor(props){
        super(props)
        this.state={show:true}
       }
       back =()=>{
        this.setState({show:false})
       }
    render(){
        return(
            <>
            <h1>Hello blog Page</h1>
            {this.state.show?"":<Navigate to="/" replace={true}/>}
             <button onClick={this.back} className="btn btn-info m-2">back</button>
             <NavLink to="/about/myform"><button className="btn btn-info m-2">Login</button> </NavLink>
            </>
        )
    }
}