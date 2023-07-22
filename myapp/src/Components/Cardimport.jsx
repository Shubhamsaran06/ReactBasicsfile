import React, {Component} from "react";
import Card1 from './Card'

// import Image from './htmlimg.png'
// import Customerimg1 from './customer-review2.png'
// import Customerimg2 from './customer-review3.png'
// import Customerimg3 from './denting-painting-v3.svg'
// import Books from './Books.jpg'

class Cardimport extends Component{
   
    constructor(props){
        super(props)
        this.state = {
           data : [
                //   {name:"Harry", img:"https://picsum.photos/200/300?random="},
                //    {name:"Harry", img:"https://picsum.photos/200/300?random="},
                //    {name:"Harry", img:"https://picsum.photos/200/300?random="},
                //    {name:"Harry", img:"https://picsum.photos/200/300?random="},
                //    {name:"Harry", img:"https://picsum.photos/200/300?random="}
                ],
                count:0,
                show:true
    
        
            }
           
        }


    
   
   
   
    render(){
      
      let changedata = ()=>{
        this.setState({
            show:!this.state.show
        })
      }

      let getdata =()=> {
          this.setState({count:this.state.count+1})

        //   alert(this.state.count +" Data is added")
        
          fetch(`https://jsonplaceholder.typicode.com/photos?&_limit=${this.state.count}`)   //?&_limit=20  =>    isse limit set hoti h kitna data fetch krna h
        .then(response => response.json())
        .then(json =>{ console.log(json)
         this.setState({data:json }  )}
         )
          
        
        //   fetch('https://jsonplaceholder.typicode.com/photos?&_limit=20')   //?&_limit=20  =>    isse limit set hoti h kitna data fetch krna h
        //   .then(response => response.json())
        //   .then(json =>{ console.log(json)
        //    this.setState({data:json }  )}
        //    )
        
      }
      
      let deletes =(i)=>{
        alert(i)
         let copy = this.state.data ; 
         copy.splice(i,1);
         console.log(copy)
         this.setState({
          data:copy
         })
       } 

       
      let css ={
           background:this.state.show?"green":"red",
           color:"white"
    }




      return(  
       <>
       <button onClick={getdata}>getdata</button>
       <button onClick={changedata} style={css}>{this.state.show?"Hide":"Show"}Data</button>
      
       
      
       { 
      
       this.state.show ? this.state.data.map((value,index) => {
        return(
        
        <Card1 name={"Ram "+value.id} img={"https://picsum.photos/200/200?random=" + index} title={value.title}  deleted={()=>{deletes(index)}}/>
        
        )
       
      }):  <h1>Data is Hidden</h1>

      // this.state.data ? this.state.data
      //  (
        
      //   <Card1 name={"Ram "+this.state.id+1} img={"https://picsum.photos/200/300?random=" } />
        
      //   )
       
      // :"Loading......"
    
         }
      


      
    </>  
     )  
     
}
}
export default Cardimport