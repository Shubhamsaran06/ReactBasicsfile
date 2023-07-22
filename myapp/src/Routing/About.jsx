import React, {Component} from "react";
import {Link, Navigate, Outlet } from "react-router-dom";


export default class About extends Component{
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
             <h1>Hello About Page</h1>
            
            <Link to="/about/myblog"><button className="btn btn-info m-2">my journey</button></Link> 
           <Link to="/about/myform"><button className="btn btn-info m-2">my login</button></Link>
             
            
            {this.state.show?"":<Navigate to="/" replace={true}/>}
             <button onClick={this.back} className="btn btn-info m-2">back</button>
            
            </>
        )
    }
}