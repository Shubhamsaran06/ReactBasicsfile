import React ,{Component} from "react";
import './First.css';




class Firstclass extends Component{
    render(){
        return(
            <>
            <form className="First_form">
                <h3>Form</h3>
                <input type="text" placeholder="Enter Your Name" className="Form_inp"/>
                <input type="text" placeholder="Enter Your Email" className="Form_inp"/>
                <input type="password" placeholder="Enter Your Password" className="Form_inp"/>
            </form>
            </>
        )
    }
}

export default Firstclass 