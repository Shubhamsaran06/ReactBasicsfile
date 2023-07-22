import React,{Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Accordian  from "./Bootstrap_2";
import pro from "prop-types";



class Bootstrap extends Component{
    render(){
        return(
    <>
  {/* <button onClick={()=>{this.props.fun}}>change</button> */}
  <button onClick={()=>{this.props.fun("shyam")}}>change</button>  

  {/* this is callback function when we give values from child to parents */}
 {/* <Accordian/> */}
 {/* <Acc/> */}
 <div>
 <div class="card p-3 m-5" style={{width: "18rem"}}>
  <img src="http://source.unsplash.com/200x200/?coding" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
     </div>
    </div>
    </>
        )
    }
}

export default Bootstrap;