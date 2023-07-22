import React,{Component} from "react";
import Styled from "styled-components"

export default class Styled1 extends Component{
    render(){
           let Box = Styled.div `width:100px;height:100px;background-color:red;
           margin:5px;display:flex;align-items:center;justify-content:center;
           &:hover{background:yellow;}
           `

           let Btn = Styled.button`background:blue;
           color:white;
           border:0px;`

           let Btn1 = Styled.button`
             background:${props=>props.primary=="true"?"blue":"green"}
           `

        return(
            <>
                <Box><Btn>Click</Btn></Box>
                <Box><Btn1 primary="true">Click</Btn1></Box>
                <Box><Btn>Click</Btn></Box>
                <Box><Btn1 primary="false">Click</Btn1></Box>
                
        </>
        )
    }
}
