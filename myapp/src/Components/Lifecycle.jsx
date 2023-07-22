import React, { Component } from 'react'

export default class Lifecycle extends Component {
  constructor(props) {
    super(props)
  console.log("classfile constructor")
    this.state = {
       count:0
    }
  }
  shouldComponentUpdate(){
   return true
  } 

  componentDidUpdate(){
    console.log("updated")
  } 
  render() { 
    console.log("classfile render method")
    return (
      <div className='border m-5 p-5 bg-info w-75 m-auto'> 

        <h1> classfile component</h1>
        <h1> given prop{this.props.show}</h1> 
        <button onClick={this.change}>change</button>
      <br></br>
       <mark> counnt :- {this.state.count}</mark>
      </div>
    )
  } 
  componentWillUnmount(){
    console.log("component willl unmounted")
  } 
  componentDidMount(){
    console.log("classfile mounted")
  }
  change=()=>{
    for(let i=0; i<=9299993939; i++){} ;
    this.setState({count:this.state.count +1})
  }
}


