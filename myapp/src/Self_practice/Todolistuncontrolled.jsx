import React, { Component } from "react";
import './Todolist.css'

export default class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            up: null
        }
    }

    
    render() {
        let submit = (event) => {
            event.preventDefault();
            let todo = {
                task: event.target.task.value,
                time: event.target.time.value,
            }
            if (this.state.up) {
                this.setState({
                    data: this.state.data.map((v, i) => {
                        if (v === this.state.up) {
                            return {
                                ...v, task: event.target.task.value, time: event.target.time.value,
                            }
                        }
                        return v
                    }),
                    up: null
                })
            } else {
                this.setState({
                    data: [...this.state.data, todo],
                });
            }
            event.target.task.value = ""
            event.target.time.value = ""
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
            document.getElementById("task").value = updatetodo.task;
            document.getElementById("time").value = updatetodo.time;
        }
        return (
            <>  
                <div className="maindiv bg-info m-3 p-3 w-75">
                    <h2>To Do List</h2>
                    <form style={{ display: "block", marginTop: "50px" }} onSubmit={submit}>
                        <label className="inp" >Add Your Task Here :</label>
                        <input type="text" id="task" className="inp" name="task" required />
                        <label className="inp" >Add Time Here :</label>
                        <input type="time" className="inp" id="time" name="time" required />
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
                                        <td> <button onClick={() => { deleted(index) }}> Delete</button></td>
                                        <td> <button onClick={() => { updated(index) }}> Update</button></td>
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