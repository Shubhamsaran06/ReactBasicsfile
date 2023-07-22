import React,{Component} from "react";
import Tableclass from "./Tablepractice";

class Tabimport extends Component{
   constructor(props){
    super(props)
    this.state={
        data:[{id:1,Name:"Ram",Email:"abc@gmail.com"},
              {id:2,Name:"Ram",Email:"abc@gmail.com"},
              {id:3,Name:"Ram",Email:"abc@gmail.com"},
              {id:4,Name:"Ram",Email:"abc@gmail.com"},
              {id:5,Name:"Ram",Email:"abc@gmail.com"},
              {id:6,Name:"Ram",Email:"abc@gmail.com"},
              {id:7,Name:"Ram",Email:"abc@gmail.com"}
        ]
    }
}




    render(){
        return(
            // <Tableclass id="1" Name="Ram" Email="abc@gmail.com"/>
              <>
              <table>
                <tr>
                    <th style={{border:"solid"}}>Id</th>
                    <th style={{border:"solid"}}>Name</th>
                    <th style={{border:"solid"}}>Email</th>
                </tr>
             
              {  
             
             this.state.data.map((value,index)=>{
                return(
                   <Tableclass id={value.id} Name={value.Name} Email={value.Email}/>
                   )
               })
               
               }
                    
                  
            
            </table>
            </>
        
        )
    }
}

export default Tabimport