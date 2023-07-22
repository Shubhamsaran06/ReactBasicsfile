import React, { Component } from "react";
import './Todolist.css'

export default class Todolistcontroll extends Component {
    constructor(props){
        super(props)
    
        this.state={
            data:[],
            task:"",
            time:"",
            up:null 
         }
      }







    render(){
        let submit =(e)=>{
            e.preventDefault();
            let to ={
               task:this.state.task,time:this.state.time
            }
            // this.setState({
            //     data:[...this.state.data,to]
            // })
            if (this.state.up) {
                this.setState({
                    data: this.state.data.map((v, i) => {
                        if (v === this.state.up) {
                            return {
                                ...v, task: this.state.task, time:this.state.time,
                            }
                        }
                        return v
                    }),
                    up: null
                })
            } else {
                this.setState({
                    data: [...this.state.data, to],
                });
            }
            this.state.task="";
            this.state.time="";

            
        }

        let deleted = (index) => {
            let copy = this.state.data;
            copy.splice(index, 1);
            this.setState({
                data: copy
            })
        }

        let updated = (index) => {
            let updatetodo = this.state.data.find((v) => {
                if (this.state.data[index] === v) {
                    return v
                }
            });
            this.setState({
             up: updatetodo
             })
            this.state.task = updatetodo.task;
            this.state.time = updatetodo.time;
        }


        return(
            <>
              <div className="maindiv bg-info m-3 p-3 w-75">
                    <h2>To Do List(Controlled)</h2>
                    <form style={{ display: "block", marginTop: "50px" }} onSubmit={submit} >
                        <label className="inp" >Add Your Task Here :</label>
                        <input type="text" id="task" className="inp" name="task" value={this.state.task} onChange={(e)=>{this.setState({task:e.target.value})}}/>
                        <label className="inp" >Add Time Here :</label>
                        <input type="time" className="inp" id="time" name="time" value={this.state.time} onChange={(e)=>{this.setState({time:e.target.value})}}/>
                        <button type="submit" className="m-2 p-1 btn btn-secondary">Submit</button>
                    </form>
             </div>
             <div>
                    <table className="table bg-primary m-3 p-3 w-75 text-white">
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Task</th>
                                <th scope="col">Time</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Update</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.state.data.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value.task}</td>
                                        <td>{value.time}</td>
                                        <td> <button className="btn btn-secondary" onClick={() => {deleted(index) }}> Delete</button></td>
                                        <td> <button className="btn btn-secondary" onClick={() => {updated(index) }}> Update</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
              </div>
         </>
        )
    }
}