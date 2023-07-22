import React,{Component} from "react";

export default class Uncontrolled extends Component{
    render(){

       let submithandler = (event)=>{
          event.preventDefault();
          console.log(event.target.Email.value)
          console.log(event.target.Password.value)
       }







        return(
            <div>
            <h2 className="text-white m-5 p-5 w-75">Uncontrolled Component</h2>

            <form className="m-5 p-5 w-75 bg-primary text-white" onSubmit={submithandler}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" name="Email" aria-describedby="emailHelp"/>
              
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" name="Password"/>
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
          </form>
          </div>
        )
    }
}