import { Component } from "react";

interface Props{
    mensagem:string;
}

export default class ButtonComponent extends Component <Props>{
    render(){
        return(
            <div >
                <button style={{color:"white",backgroundColor:"#000000"}} >
                    <span>{this.props.mensagem}</span>
                    
                     </button>
            </div>
        )
    }
}