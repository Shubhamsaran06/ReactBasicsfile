import React,{Component} from "react";

export default class Controlled extends Component{

   constructor(props){
    super(props)
   let getdata =()=>{
    let get = JSON.parse(localStorage.getItem("formdata"));
    if(get){
      return get
    }else{
      return []
    }
   }
    this.state={
       
        data:getdata(),
        email:"",
        pass:"",
        show:false,
        isedit:null
    }
  }
    


    render(){
      

        let datavalue=(e)=>{
          e.preventDefault();
          this.setState({email:document.getElementsByName("Email")[0].value})
          // this.setState({a:document.getElementsByName("Email")[0].value})
          this.setState({pass:document.getElementsByName("Password")[0].value})
          // this.setState({b:document.getElementsByName("Password")[0].value})
        }

        let  submithandler = async(event)=>{
          event.preventDefault(); 

          if(this.state.show){ 

            this.setState({show:false})
             
          }else{
            await this.setState({
              data:[...this.state.data,{email:this.state.email,pass:this.state.pass}]
            });
            localStorage.setItem("formdata",JSON.stringify(this.state.data));
          }
          console.log(this.state.data)
         }

         let deleted= async(i)=>{
          console.log(i);
          let copydata = this.state.data;
          copydata.splice(i,1);
         
          await this.setState({data:copydata})
          localStorage.setItem("formdata",JSON.stringify(this.state.data))
         }


         let update = async(i)=>{
           let updatevalue = this.state.data.find((a)=>
           {
             return this.state.data[i] === a
             
           })
         
           
           this.setState({isedit:updatevalue} )
          this.setState({email:updatevalue.email} )
          this.setState({pass:updatevalue.pass} )
          this.setState({show:true})    

        }

       



        return(
            <div>
            <h2 className="text-white m-5 p-5 w-75">Controlled Component</h2>

                 


            <form className="m-5 p-5 w-75 bg-primary text-white" onSubmit={submithandler}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" value={this.state.email}  name="Email" onChange={datavalue}/>
              
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" value={this.state.pass}  name="Password" onChange={datavalue}/>
            </div>
            <button type="submit" class="btn btn-info">Submit</button>
          </form>
       
  <table className="table m-5 p-5 w-75 bg-primary text-white">
  <thead>
    <tr>
      <th scope="col">S no.</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
   {this.state.data? this.state.data.map((value,index)=> {
     return ( 
      <tr>
      <th scope="row">{index+1}</th>
      <td>{value.email}</td>
      <td>{value.pass}</td>
      <td><button className="btn btn-info" onClick={()=>deleted(index)}>Delete</button></td>
      <td><button className="btn btn-info" onClick={()=>update(index)}>Update</button></td>
     </tr>
     )
    }) :""
  }
    
   
  </tbody>
</table>

         
 
        </div>
        )
    }
}