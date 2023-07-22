import React,{ Component } from "react";
import logo from './logo.svg' 
import Imag from './htmlimg.png' 
// import './Components.css'
import Firstclass from "./First";
import Tableclass from "./Second";
import Css from "./Components.module.css"
                                          // public file se image direct dal skte h naam nhi dena padta



 class Navbar extends Component{
    render(){
        let link = "http://www.google.com"        //href me link direct bhi likh skte h or variable me dal kr bhi
        let css = {                              //internal Css me ek variable bana kr css ko object ke form me rakhte h
            fontSize:"50px",                    //dash ("-") kki jagah agla letter capital ho jata h
            color:"red",
            // border:"solid  red" 
        }                                     //fregments ya render ke andar js likhne k liye curly brackates ka use hota h 
     return(
                                            // <></>      //React fregments
        <>
        <>
            <h1 style={css}>Hello Component</h1>
            <img src={logo} alt="" className={Css.Logoimg}/>
            <a href={link} target="_blank" ><img src={Imag} className={Css.Logoimg}/></a>  
            <p style={{color:"black",border:"solid"}}>Paragraph</p>             
            {/* style={{color:"black",border:"solid"}} ==>> Ye Inline CSS h */}
        </>
            <Firstclass/>   
            <Tableclass/>            
        </>
     )
    }
}


export default Navbar;

  


