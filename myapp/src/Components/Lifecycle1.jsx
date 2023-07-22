import React, { Component } from 'react'

import Lifecycle from './Lifecycle'

export default class Lifecycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          show:true
      } 
      console.log("constructor")
    }
   componentDidMount(){
     console.log("componentDidMount")
   }   
  
  render() { 
    console.log("render method")
    return (
      <div className='border m-5 p-5 bg-secondary w-75 m-auto'>
        <button onClick={()=>{this.setState({show:!this.state.show})}}>change</button>
        <h1>{this.state.show}</h1> 
       { this.state.show? <Lifecycle   show={this.state.show}/> :"no data here"}
      </div>
    )
  }
}