import React, { Component } from 'react';
import {Name} from './Prentfun'

class Contextclass extends Component {
    render() {
        return (
            <div>
                <Name.Consumer>
                    {
                        (s)=>{
                            return(
                                <>
                                 <h1>{s.name}</h1>
                                 <h1>{s.age}</h1>
                                 <button onClick={()=>{s.fun("Hello Raj")}}>Click</button>
                                </>
                            )
                        }
                    }
                </Name.Consumer>
            </div>
        );
    }
}

export default Contextclass;
