import React,{Component} from "react";
import {NavLink} from 'react-router-dom';

export default class Form1 extends Component{

   constructor(props){
    super(props)

    this.state={
        email:"",
        pass:"",
        show:false,
        visible:true,
        type:"password"
    }
  }
    


    render(){
      

        let datavalue=(e)=>{
          e.preventDefault();
          this.setState({email:document.getElementsByName("Email")[0].value})
          this.setState({pass:document.getElementsByName("Password")[0].value})
        }

        let submithandler = (event)=>{
          event.preventDefault();
          console.log(this.state)
          this.setState({
          show:!this.state.show
         })
        }

       let Showpass = ()=>{
        this.state.visible?this.setState({type:"text" ,visible:!this.state.visible}):this.setState({type:"password",visible:!this.state.visible})
       }
          

       let css ={
        background:this.state.visible?"green":"red",
        color:"white"
       }


      // let dynamiccss = ["btn","btn-primary"]

      // if(this.state.visible){
      //   dynamiccss.pop()
      //   dynamiccss.push("m-5","p-5");
      // }else{
      //   dynamiccss.pop()
      //   dynamiccss.push("m-2","p-2");
      // }

        return(
            <div>
            {/* <h2 className="text-white m-5 p-5 w-75">Controlled Component</h2> */}

          { this.state.show ? '' :        

            <>
            <form className="m-5 p-5 w-75 bg-primary text-white" onSubmit={submithandler}>
            {/* <h2 className="text-white m-5 p-5 w-75">Registration Form</h2> */}
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" value={this.state.email} id="exampleInputEmail" name="Email" onChange={datavalue}/>
              
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type={this.state.type} class="form-control" value={this.state.pass} id="exampleInputPassword" name="Password" onChange={datavalue} />
              <button type="button" onClick={Showpass} class="btn btn-info m-2" style={css}>{this.state.visible?"Show Password":"Hide Password"}</button>
              {/* <button type="button" onClick={Showpass} class={dynamiccss.join(" ")} style={css}>{this.state.visible?"Show Password":"Hide Password"}</button> */}
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
            <button className="btn btn-info m-2"><NavLink to={'/'} className='nav-link'>Home</NavLink></button>
          </form>
          </>
        }
         

         
  {this.state.show ?   
          <div className="container text-white bg-primary p-5">
            <button style={{marginLeft:"90%"}} onClick={()=>{this.setState({show:false})}}>X</button>
          <h3>Email :{this.state.email}</h3>
          <h3>Password: {this.state.pass}</h3>
         </div>
        : ''
}
        </div>
        )
    }
}