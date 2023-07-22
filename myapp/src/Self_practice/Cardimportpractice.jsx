import React, {Component} from "react";
import Cardpractice from "./Cardpractice";

class Cardimport1 extends Component{
    constructor(props){
        super(props)
        this.state = {
           data : [ {name:"Harry", img:"https://picsum.photos/200/200?random="},
           {name:"John", img:"https://picsum.photos/200/200?random="},
            {name:"Derek", img:"https://picsum.photos/200/200?random="},
             {name:"Ben", img:"https://picsum.photos/200/200?random="},
              {name:"Steve", img:"https://picsum.photos/200/200?random="}],
              count:0
            }
            
        }
        
     
           
    render(){
     
          let getdata = ()=>{ this.setState({
            count:this.state.count+1
          }
          
          )
          console.log(this.state.count);
          // j()

          
        }



       
  
        let j =()=>{
          for(let i=0;i<=this.state.count;i++){
         return(
       
        <Cardpractice title={this.state.data[i].name} img={ this.state.data[i].img} />
        
        )
       }
       }
        
        
        
        return(



        <div className="d-flex overflow:scroll gap-5">
           <button onClick={getdata}>get</button>
        {/* {  
      
          //  this.state.data.map((value,index) => {
          //    return(
             
          //    <Cardpractice title={value.name} img={ value.img+index} />
          //    )
            
          //  })
             
          
          
          // }
        */}
        {j()}
      
    </div>   


       
           
             
           
                
            
            
            
            
            
            
            
            
            
            
            
            
             )}
    }




export default Cardimport1