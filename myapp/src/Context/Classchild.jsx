import React, { Component } from 'react';
import {Data} from '../AppContext'

class Classchild extends Component {
    render() {
        return (
            <div>
                <h3>Classchild Component</h3>
                {
                    <Data.Consumer>
                      {
                        (a)=>{
                            return(
                                <>
                                 <h1>{a.age}</h1>
                                </>
                            )
                        }
                      }



                    </Data.Consumer>




                }
            </div>
        );
    }
}

export default Classchild;
