import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

class Cardpractice extends Component{
    render(){
        return(
            <>
               <div class="card" style={{width: "18rem"}}>
  <img src={this.props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name:{this.props.title}</h5>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
            </>
        )
    }
}

export default Cardpractice