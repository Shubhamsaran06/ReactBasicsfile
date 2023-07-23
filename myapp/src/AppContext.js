import React, { Component,createContext } from 'react';
import Parent from './Context/Parent';
import Memohook from './Functional/Memohook';




export let Data = createContext();
class AppContext extends Component {
// constructor(props){
//     super(props)
//     this.state={
//         change:"noothing"
//     }
// }
    render() {

        // let value ={
        //     name:'rahul',age:33,post:"hr",
        //     fun:(a)=>{
        //         this.setState({
        //             change:a
        //         })
        //     }
        // }
        return (
            <div>
                {/* {this.state.change}
                <Data.Provider value={value}>
                    <Parent />
                </Data.Provider> */}

                <Memohook/>
                
            </div>
        );
    }
}

export default AppContext;
