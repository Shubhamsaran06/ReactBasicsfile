import React,{Component} from "react";

class Classfile extends Component{
   constructor(props){
    super(props)
    this.state={
        name:["Ram","Shyam","Mohit","Ketan","Mayank"],
        post:"Manager",
        count:0
    }
    this.change = this.change.bind(this)
    // this.increment = this.increment.bind(this)
   }
   
   change(){  
      

    this.state.count<this.state.name.length ? 
    this.setState({count:this.state.count+1}):this.setState({count:0})
    
    
    
    // method process
   
   }    
   
   
//    increment(){
//       this.setState({
//         count:this.state.count+1 
//       })
//    }
    
render(){
   


// let decrement =()=>{                                      // inline function
//  if(this.state.count>0){
//     this.setState({
//         count:this.state.count-1
//     })
// }else{
//     this.setState({
//         count:this.state.count
//     })
// }
// }



// let plusfive =()=>{
//     this.setState({
//         count:this.state.count+5
//     })
// }


// let minusfive =()=>{
//     if(this.state.count>0){
//        this.setState({
//            count:this.state.count-5
//        })
//    }else{
//        this.setState({
//            count:this.state.count
//        })
//    }
//    }
    
  
       
      
   

       
            
   
   
   
   
   
   
   
    return(
        <div>
            {/* <h1>Hello Class Component</h1>
            <h1>Hello &nbsp; {this.state.name}</h1>
            <h1>your post &nbsp;{this.state.post}</h1>
            <h1>NO. is {this.state.count}</h1>
            <button onClick={this.change}>Change</button>             
                                 {/* method process*/}
            {/* <button onClick={this.increment}>Increment</button>
            <button onClick={decrement}>Decrement</button> */}
                                  {/* inline function process */}
                                  
            {/* <button onClick={plusfive}>+5</button>
            <button onClick={minusfive}>-5</button> */} 


         <h1>Hello &nbsp; {this.state.name[this.state.count]}</h1>
         <button onClick={this.change}>Change</button>




        </div>

    )
   }

}

export default Classfile





