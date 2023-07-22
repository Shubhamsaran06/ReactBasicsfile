import React,{Component} from "react";

function Card1(props){


    
    let  css={
               width:"200px",
               height:"200px",
               backgroundColor:"purple",
               color:"white",
               margin:"20px"
    }
   let im={
    width:"50px",height:"50px"
   }
    
    return(

<div>
 <div class="card p-3 m-5" style={{width: "18rem"}}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name : {props.name}</h5>
    <h5 class="card-title">Title : {props.title}</h5>

    <button onClick={props.deleted}> delete</button>
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
     </div>
     </div>
    </div>
        // <div style={css}>
        //     <h1>{props.name}</h1>
        //     <img src={props.img} style={im}  alt="" />
        // </div>
    )
}


export default Card1;