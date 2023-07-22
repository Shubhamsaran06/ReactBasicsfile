import React,{Component} from "react";


class Tableclass extends Component {
    render(){
        return(
           <>

           
             {/* <tr>
                <th style={{border:"solid"}}>Id</th>
                <th style={{border:"solid"}}>Name</th>
                <th style={{border:"solid"}}>Email</th>
             </tr> */}
                <tr>
                <td style={{border:"solid"}}>{this.props.id}</td>
                <td style={{border:"solid"}}>{this.props.Name}</td>
                <td style={{border:"solid"}}>{this.props.Email}</td>
                </tr>


           
           
           </>
        )
    }
}

export default Tableclass