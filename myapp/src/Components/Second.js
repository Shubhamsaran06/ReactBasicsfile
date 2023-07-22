import React, {Component} from "react";
import Css from './Components.module.css'


class Tableclass extends Component {
    render(){
        return(
            <>
        
            <table className={Css.Tableclass}>
                <thead>
                    <tr>
                        <th>S no.</th>
                        <th>Name</th>
                        <th>Address.</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>1</td>
                        <td>Ram 1</td>
                        <td>Indore</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ram 2</td>
                        <td>Indore</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ram 3</td>
                        <td>Indore</td>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}
export default Tableclass