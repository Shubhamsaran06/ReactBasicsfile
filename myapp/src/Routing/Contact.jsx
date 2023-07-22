import React, {Component} from "react";
import {Link, NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default class Contacts extends Component{

    
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
            <h1>Hello Contact Page</h1>

            <button className="btn btn-info m-2"><Link to={'/'} className='nav-link '>Home</Link></button>
            <button className="btn btn-info m-2"><NavLink to={'/form'} className='nav-link'>Login</NavLink></button>


            {this.state.show ? "": <Navigate to='/' />}
             <button onClick={this.back} className="btn btn-info m-2">back</button>
            </>
        )
    }
}